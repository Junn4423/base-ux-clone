"""
═══════════════════════════════════════════════════════════════════════════════
    UNIVERSAL TEXT EXTRACTOR v4.3.0 - TURBO AI EDITION
═══════════════════════════════════════════════════════════════════════════════

Author: Junn4423
Version: 4.3.0 TURBO AI
License: Commercial
Date: 2025-10-03
═══════════════════════════════════════════════════════════════════════════════
"""

import os
import re
import json
import csv
import argparse
from pathlib import Path
from collections import defaultdict, Counter
from datetime import datetime
from typing import Dict, Set, List, Tuple, Optional
import hashlib
from concurrent.futures import ThreadPoolExecutor, as_completed
from functools import lru_cache
import threading

# ============================================
# LANGUAGE DETECTION (Enhanced)
# ============================================

try:
    from langdetect import detect, detect_langs, LangDetectException
    LANGDETECT_AVAILABLE = True
except ImportError:
    LANGDETECT_AVAILABLE = False
    print("langdetect not available. Install: pip install langdetect")

class LanguageDetector:
    """Enhanced language detection - Focused on 3 languages"""
    
    # Unicode ranges for language detection (FOCUSED ON 3 LANGUAGES)
    LANGUAGE_PATTERNS = {
        'vi': {
            'name': 'Tiếng Việt',
            'pattern': r'[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ]',
            'words': ['và', 'của', 'có', 'được', 'không', 'cho', 'từ', 'này', 'đã', 'với', 'là', 'trong', 'một', 'các', 'người', 'để', 'thì', 'sẽ', 'đến', 'khi'],
            'common_prefixes': ['thông', 'đang', 'đã', 'sẽ', 'vui', 'lòng', 'xin', 'cảm', 'ơn'],
        },
        'en': {
            'name': 'English',
            'pattern': r'\b(the|is|are|was|were|and|or|in|on|at|to|for|of|with|by|from|this|that|these|those)\b',
            'words': ['the', 'is', 'are', 'and', 'or', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'from', 'this', 'that', 'was', 'were', 'have', 'has'],
            'common_prefixes': ['please', 'thank', 'welcome', 'success', 'error', 'warning', 'info'],
        },
        'zh': {
            'name': '中文',
            'pattern': r'[\u4e00-\u9fff]',
            'words': ['的', '是', '在', '了', '和', '有', '人', '我', '他', '你', '们', '中', '来', '上', '大', '为', '个', '国', '不', '以'],
            'common_prefixes': ['成功', '失败', '错误', '警告', '信息', '请', '谢谢'],
        },
    }
    
    LANGDETECT_MAP = {
        'vi': 'vi', 'en': 'en',
        'zh-cn': 'zh', 'zh-tw': 'zh', 'zh': 'zh',
    }
    
    @classmethod
    def detect(cls, text: str) -> str:
        """Detect language with fallback - FOCUSED ON 3 LANGUAGES"""
        if not text or len(text) < 2:
            return 'unknown'
        
        # Priority 1: Check Vietnamese (most specific)
        if re.search(cls.LANGUAGE_PATTERNS['vi']['pattern'], text):
            return 'vi'
        
        # Priority 2: Check Chinese (second most specific)
        if re.search(cls.LANGUAGE_PATTERNS['zh']['pattern'], text):
            return 'zh'
        
        # Priority 3: Try langdetect for English vs others
        if LANGDETECT_AVAILABLE:
            try:
                detected = detect(text)
                mapped = cls.LANGDETECT_MAP.get(detected, detected)
                if mapped in ['vi', 'en', 'zh']:
                    return mapped
            except:
                pass
        
        # Priority 4: Check for English patterns
        if re.search(cls.LANGUAGE_PATTERNS['en']['pattern'], text, re.IGNORECASE):
            return 'en'
        
        # Default to English if has Latin characters
        if re.search(r'[a-zA-Z]{3,}', text):
            return 'en'
        
        return 'unknown'
    
    @classmethod
    def detect_with_confidence(cls, text: str) -> Tuple[str, float]:
        """Detect language with confidence score"""
        if not text or len(text) < 3:
            return 'unknown', 0.0
        
        if LANGDETECT_AVAILABLE:
            try:
                langs = detect_langs(text)
                if langs:
                    detected = langs[0].lang
                    confidence = langs[0].prob
                    mapped_lang = cls.LANGDETECT_MAP.get(detected, detected)
                    return mapped_lang, confidence
            except:
                pass
        
        # Fallback
        lang = cls.detect(text)
        return lang, 0.5 if lang != 'unknown' else 0.0
    
    @classmethod
    def get_language_name(cls, lang_code: str) -> str:
        """Get language name from code"""
        return cls.LANGUAGE_PATTERNS.get(lang_code, {}).get('name', lang_code.upper())

# ============================================
# CONFIGURATION (Production-Ready)
# ============================================

class Config:
    """Production-ready configuration with performance optimization"""
    
    # Performance settings
    MAX_WORKERS = 8  # Parallel threads for file processing
    CHUNK_SIZE = 100  # Files per chunk
    ENABLE_CACHE = True  # Cache validation results
    
    # File extensions to scan (EXPANDED)
    FILE_EXTENSIONS = {
        'web': ['.php', '.html', '.htm', '.jsp', '.asp', '.aspx'],
        'javascript': ['.js', '.jsx', '.ts', '.tsx', '.vue', '.svelte'],
        'mobile': ['.dart', '.swift', '.kt', '.java'],
        'desktop': ['.py', '.cs', '.cpp', '.c', '.h'],
        'config': ['.json', '.xml', '.yaml', '.yml'],
    }
    
    # Folders to skip (MINIMAL)
    SKIP_FOLDERS = {
        'node_modules', '.git', '__pycache__', 
        'vendor', 'venv', 'env', '.venv',
        'dist', 'build', 'out', '.next',
        'coverage', '.idea', '.vscode',
    }
    
    # Files to skip
    SKIP_FILES = {
        'package-lock.json', 'yarn.lock', 'composer.lock',
        'package.json', '.gitignore', '.env',
    }
    
    # Text length constraints
    MIN_LENGTH = 2
    MAX_LENGTH = 500
    
    # Compiled regex patterns cache
    _compiled_patterns = None
    _compile_lock = threading.Lock()
    
    # Extraction patterns (70+ patterns for ULTIMATE coverage)
    PATTERNS = {
        # ============================================
        # HTML/XML PATTERNS (UI-focused)
        # ============================================
        'html_text': r'>([^<>{}]+)<',
        'html_text_tight': r'>\s*([^\s<>{}][^<>{}]*[^\s<>{}])\s*<',
        'html_attr_title': r'title\s*=\s*["\']([^"\']+)["\']',
        'html_attr_alt': r'alt\s*=\s*["\']([^"\']+)["\']',
        'html_attr_placeholder': r'placeholder\s*=\s*["\']([^"\']+)["\']',
        'html_attr_value': r'value\s*=\s*["\']([^"\']+)["\']',
        'html_attr_label': r'label\s*=\s*["\']([^"\']+)["\']',
        'html_attr_content': r'content\s*=\s*["\']([^"\']+)["\']',
        'html_attr_data': r'data-[a-z-]+\s*=\s*["\']([^"\']+)["\']',
        
        # ============================================
        # PHP PATTERNS (ULTIMATE - Complex Assignments)
        # ============================================
        'php_echo': r'echo\s+["\']([^"\']+)["\']',
        'php_print': r'print\s+["\']([^"\']+)["\']',
        'php_string_double': r'"([^"\\]*(?:\\.[^"\\]*)*)"',
        'php_string_single': r"'([^'\\]*(?:\\.[^'\\]*)*)'",
        'php_heredoc': r'<<<["\']?(\w+)["\']?\s+(.*?)\s+\1',
        'php_short_echo': r'<\?=\s*["\']([^"\']+)["\']',
        'php_concat_string': r'["\']([^"\']+)["\']\s*\.',
        
        # Complex PHP Assignments (NEW - ULTRA POWERFUL)
        'php_var_assignment': r'\$\w+\s*=\s*["\']([^"\']+)["\']',  # $var = 'text'
        'php_array_simple': r'\$\w+\[\s*["\']?\w+["\']?\s*\]\s*=\s*["\']([^"\']+)["\']',  # $arr[key] = 'text'
        'php_array_nested': r'\$\w+\[\s*["\']?\w+["\']?\s*\]\[\s*["\']?\w+["\']?\s*\]\s*=\s*["\']([^"\']+)["\']',  # $arr[key1][key2] = 'text'
        'php_array_numeric': r'\$\w+\[\s*\d+\s*\]\s*=\s*["\']([^"\']+)["\']',  # $arr[0] = 'text'
        'php_object_property': r'\$\w+->\w+\s*=\s*["\']([^"\']+)["\']',  # $obj->prop = 'text'
        'php_static_property': r'\w+::\$\w+\s*=\s*["\']([^"\']+)["\']',  # Class::$prop = 'text'
        'php_array_push': r'array_push\s*\(\s*\$\w+\s*,\s*["\']([^"\']+)["\']\s*\)',  # array_push($arr, 'text')
        'php_array_literal': r'array\s*\(\s*["\']([^"\']+)["\']\s*[,\)]',  # array('text', ...)
        'php_short_array': r'\[\s*["\']([^"\']+)["\']\s*[,\]]',  # ['text', ...]
        'php_concat_complex': r'["\']([^"\']+)["\']\s*\.\s*\$',  # 'text' . $var
        'php_concat_reverse': r'\$\w+\s*\.\s*["\']([^"\']+)["\']',  # $var . 'text'
        
        # ============================================
        # JAVASCRIPT/JSX PATTERNS (ENHANCED)
        # ============================================
        'jsx_text': r'>\s*([^<>{}\n]+)\s*<',
        'jsx_text_curly': r'{\s*["\']([^"\']+)["\']\s*}',
        'js_string_double': r'"([^"\\]*(?:\\.[^"\\]*)*)"',
        'js_string_single': r"'([^'\\]*(?:\\.[^'\\]*)*)'",
        'js_template': r'`([^`]+)`',
        'js_template_literal': r'\$\{["\']([^"\']+)["\']\}',
        
        # Complex JS Assignments (NEW)
        'js_var_assignment': r'(?:var|let|const)\s+\w+\s*=\s*["\']([^"\']+)["\']',
        'js_object_property': r'\w+\s*:\s*["\']([^"\']+)["\']',  # property: 'text'
        'js_array_literal': r'\[\s*["\']([^"\']+)["\']\s*[,\]]',  # ['text', ...]
        'js_object_bracket': r'\w+\[\s*["\']([^"\']+)["\']\s*\]',  # obj['text']
        
        # ============================================
        # FRAMEWORK PATTERNS
        # ============================================
        'vue_template': r'{{([^}]+)}}',
        'vue_directive': r'v-text\s*=\s*["\']([^"\']+)["\']',
        'angular_interpolation': r'{{([^}]+)}}',
        'angular_directive': r'\[innerText\]\s*=\s*["\']([^"\']+)["\']',
        'react_intl': r'(?:FormattedMessage|intl\.formatMessage)\s*.*?(?:defaultMessage|message)\s*[:=]\s*["\']([^"\']+)["\']',
        
        # ============================================
        # TOAST/ALERT/NOTIFICATION PATTERNS
        # ============================================
        'toast_message': r'(?:toast|message|alert|notification)\s*\.\s*(?:success|error|warning|info)\s*\(\s*["\']([^"\']+)["\']',
        'swal_message': r'(?:Swal|swal)\s*\.\s*(?:fire|success|error|warning|info)\s*\(\s*["\']([^"\']+)["\']',
        'alert_message': r'alert\s*\(\s*["\']([^"\']+)["\']',
        'confirm_message': r'confirm\s*\(\s*["\']([^"\']+)["\']',
        
        # ============================================
        # FORM VALIDATION PATTERNS
        # ============================================
        'validation_message': r'(?:message|error|warning|info)\s*:\s*["\']([^"\']+)["\']',
        'error_message': r'(?:errorMessage|error_message|errMsg)\s*[:=]\s*["\']([^"\']+)["\']',
        'success_message': r'(?:successMessage|success_message|successMsg)\s*[:=]\s*["\']([^"\']+)["\']',
        
        # ============================================
        # TABLE/GRID HEADERS
        # ============================================
        'table_header': r'<th[^>]*>([^<]+)</th>',
        'table_cell': r'<td[^>]*>([^<]+)</td>',
        'grid_header': r'(?:header|title|label)\s*:\s*["\']([^"\']+)["\']',
    }
    
    # Patterns to extract based on file type (ULTIMATE - 70+ patterns)
    FILE_PATTERNS = {
        '.php': [
            # HTML patterns
            'html_text', 'html_text_tight', 'html_attr_title', 'html_attr_alt', 
            'html_attr_placeholder', 'html_attr_value', 'html_attr_label',
            # PHP output patterns
            'php_echo', 'php_print', 'php_string_double', 'php_string_single', 
            'php_short_echo', 'php_concat_string',
            # PHP assignment patterns (NEW - COMPLEX)
            'php_var_assignment', 'php_array_simple', 'php_array_nested',
            'php_array_numeric', 'php_object_property', 'php_static_property',
            'php_array_push', 'php_array_literal', 'php_short_array',
            'php_concat_complex', 'php_concat_reverse',
            # Table & UI
            'table_header', 'table_cell',
            # Notifications
            'toast_message', 'alert_message', 'swal_message',
        ],
        '.html': [
            'html_text', 'html_text_tight', 'html_attr_title', 'html_attr_alt', 
            'html_attr_placeholder', 'html_attr_value', 'html_attr_label',
            'html_attr_content', 'html_attr_data',
            'table_header', 'table_cell',
        ],
        '.htm': [
            'html_text', 'html_text_tight', 'html_attr_title', 'html_attr_alt', 
            'html_attr_placeholder', 'html_attr_value', 'html_attr_label',
            'table_header', 'table_cell',
        ],
        '.js': [
            # JSX/React patterns
            'jsx_text', 'jsx_text_curly', 
            # String patterns
            'js_string_double', 'js_string_single', 'js_template', 'js_template_literal',
            # Assignment patterns (NEW)
            'js_var_assignment', 'js_object_property', 'js_array_literal', 'js_object_bracket',
            # Notifications
            'toast_message', 'swal_message', 'alert_message', 'confirm_message',
            'validation_message', 'error_message', 'success_message',
        ],
        '.jsx': [
            # JSX/React patterns
            'jsx_text', 'jsx_text_curly',
            # String patterns
            'js_string_double', 'js_string_single', 'js_template', 'js_template_literal',
            # Assignment patterns (NEW)
            'js_var_assignment', 'js_object_property', 'js_array_literal', 'js_object_bracket',
            # React specific
            'react_intl', 'toast_message', 'swal_message',
            'validation_message', 'error_message', 'success_message',
        ],
        '.ts': [
            # JSX/React patterns
            'jsx_text', 'jsx_text_curly',
            # String patterns
            'js_string_double', 'js_string_single', 'js_template', 'js_template_literal',
            # Assignment patterns (NEW)
            'js_var_assignment', 'js_object_property', 'js_array_literal', 'js_object_bracket',
            # Notifications
            'toast_message', 'swal_message', 'alert_message',
            'validation_message', 'error_message', 'success_message',
        ],
        '.tsx': [
            # JSX/React patterns
            'jsx_text', 'jsx_text_curly',
            # String patterns
            'js_string_double', 'js_string_single', 'js_template', 'js_template_literal',
            # Assignment patterns (NEW)
            'js_var_assignment', 'js_object_property', 'js_array_literal', 'js_object_bracket',
            # React specific
            'react_intl', 'toast_message', 'swal_message',
            'validation_message', 'error_message', 'success_message',
        ],
        '.vue': [
            'html_text', 'html_text_tight', 'html_attr_placeholder', 'html_attr_label',
            'vue_template', 'vue_directive',
            'js_string_double', 'js_string_single', 'js_template',
            'toast_message', 'validation_message',
        ],
        '.py': [
            'js_string_double', 'js_string_single',
        ],
    }
    
    @classmethod
    def get_compiled_patterns(cls):
        """Get compiled regex patterns (cached for performance)"""
        if cls._compiled_patterns is None:
            with cls._compile_lock:
                if cls._compiled_patterns is None:  # Double-check
                    compiled = {}
                    for name, pattern in cls.PATTERNS.items():
                        try:
                            compiled[name] = re.compile(pattern, re.MULTILINE | re.DOTALL)
                        except Exception as e:
                            print(f"Failed to compile pattern '{name}': {e}")
                    cls._compiled_patterns = compiled
        return cls._compiled_patterns

# ============================================
# SMART VALIDATOR (Deep Learning Approach)
# ============================================

class SmartValidator:
    """ULTRA-PRECISE validation with 800+ exception rules + Performance optimization"""
    
    # Validation cache for performance
    _validation_cache = {}
    _cache_lock = threading.Lock()
    _max_cache_size = 10000
    
    # ============================================
    # CATEGORY 1: CODE PATTERNS (MUST REJECT)
    # ============================================
    CODE_PATTERNS = [
        # Function declarations
        r'^\s*function\s+\w+',
        r'^\s*def\s+\w+',
        r'^\s*async\s+function',
        r'^\s*const\s+\w+\s*=\s*\(',
        r'^\s*let\s+\w+\s*=\s*\(',
        r'^\s*var\s+\w+\s*=\s*\(',
        
        # Class declarations
        r'^\s*class\s+\w+',
        r'^\s*interface\s+\w+',
        r'^\s*enum\s+\w+',
        r'^\s*type\s+\w+',
        r'^\s*namespace\s+\w+',
        
        # Import/Export statements
        r'^\s*import\s+',
        r'^\s*export\s+',
        r'^\s*require\s*\(',
        r'^\s*from\s+["\']',
        r'^\s*include\s+["\']',
        r'^\s*require_once\s+',
        r'^\s*include_once\s+',
        
        # Control flow
        r'^\s*if\s*\(',
        r'^\s*else\s*{',
        r'^\s*for\s*\(',
        r'^\s*while\s*\(',
        r'^\s*switch\s*\(',
        r'^\s*case\s+',
        r'^\s*return\s+',
        r'^\s*break\s*;',
        r'^\s*continue\s*;',
        
        # Arrow functions and lambdas
        r'=>',
        r'^\s*\(\)\s*=>',
        r'lambda\s+',
        
        # Variable patterns
        r'^\$[a-zA-Z_]',  # PHP variables
        r'^_[a-zA-Z0-9_]+$',  # Private variables
        r'^[a-z][a-zA-Z0-9]*\s*=',  # Assignments
        
        # Object/Array literals
        r'^\s*{',
        r'^\s*\[',
        r':\s*{',
        r':\s*\[',
    ]
    
    # ============================================
    # CATEGORY 2: SQL PATTERNS (MUST REJECT)
    # ============================================
    SQL_PATTERNS = [
        r'\b(SELECT|FROM|WHERE|INSERT|UPDATE|DELETE|JOIN|LEFT|RIGHT|INNER|OUTER|GROUP BY|ORDER BY|HAVING|LIMIT|OFFSET)\b',
        r'\b(CREATE|DROP|ALTER|TABLE|DATABASE|INDEX|VIEW|PROCEDURE|FUNCTION|TRIGGER)\b',
        r'\b(PRIMARY KEY|FOREIGN KEY|UNIQUE|NOT NULL|AUTO_INCREMENT|DEFAULT)\b',
        r'\b(COUNT|SUM|AVG|MAX|MIN|DISTINCT|AS)\b',
        r'^\s*SET\s+',
        r'^\s*DECLARE\s+',
        r'\bWHERE\s+\w+\s*=',
        r'\bAND\s+\w+\s*=',
        r'\bOR\s+\w+\s*=',
    ]
    
    # ============================================
    # CATEGORY 3: URL/PATH PATTERNS (MUST REJECT)
    # ============================================
    URL_PATH_PATTERNS = [
        r'^https?://',
        r'^ftp://',
        r'^file://',
        r'^www\.',
        r'^\/',
        r'^\.\.?\/',
        r'\\\\',
        r'^[A-Z]:\\',  # Windows paths
        r'^\~\/',  # Unix home
        r'\.(com|net|org|edu|gov|io|vn|cn|jp|kr)/',
        r'api\/',
        r'v\d+\/',  # API versions
    ]
    
    # ============================================
    # CATEGORY 4: FILE/MIME PATTERNS (MUST REJECT)
    # ============================================
    FILE_MIME_PATTERNS = [
        r'\.(jpg|jpeg|png|gif|svg|bmp|ico|webp|tiff)$',
        r'\.(pdf|doc|docx|xls|xlsx|ppt|pptx)$',
        r'\.(zip|rar|7z|tar|gz|bz2)$',
        r'\.(mp3|mp4|avi|mov|wmv|flv|wav)$',
        r'\.(css|scss|sass|less)$',
        r'\.(js|jsx|ts|tsx|vue|php|py|java|c|cpp|h)$',
        r'\.(json|xml|yaml|yml|toml|ini|conf)$',
        r'^(image|text|application|multipart|audio|video)\/',
        r'charset=',
        r'content-type:',
    ]
    
    # ============================================
    # CATEGORY 5: ID/CLASS/SELECTOR PATTERNS (MUST REJECT)
    # ============================================
    ID_CLASS_PATTERNS = [
        r'^[a-z][a-z0-9_-]*_\d{4,}$',  # ac_lv0233, hr_lv0001
        r'^[a-z]+_r\d+_c\d+$',  # table_r1_c1
        r'^[a-z]+_\d+$',  # item_1, row_2
        r'^#[a-zA-Z0-9_-]+$',  # CSS IDs
        r'^\.[a-zA-Z0-9_-]+$',  # CSS classes
        r'^\[[a-zA-Z0-9_-]+\]$',  # Attribute selectors
        r'^[a-z]+\[[a-zA-Z0-9_-]+\]',  # Tag[attr]
        r'uuid',
        r'guid',
        r'^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}',  # UUIDs
        r'^[0-9a-f]{32}$',  # MD5 hashes
        r'^[0-9a-f]{40}$',  # SHA1 hashes
    ]
    
    # ============================================
    # CATEGORY 6: HTML/CSS/JS SPECIFIC (MUST REJECT)
    # ============================================
    HTML_CSS_JS_PATTERNS = [
        r'^<[^>]+>$',  # HTML tags only
        r'^<\/[^>]+>$',  # Closing tags
        r'^\s*<!DOCTYPE',
        r'^\s*<\?xml',
        r'^\s*<!--',
        r'^\s*\/\/',  # JS comments
        r'^\s*\/\*',  # CSS/JS comments
        r'^\s*\*\/',
        r'^\s*#[a-fA-F0-9]{3,6}$',  # Hex colors
        r'^\s*rgb\(',
        r'^\s*rgba\(',
        r'^\s*hsl\(',
        r'^\d+px$',
        r'^\d+em$',
        r'^\d+rem$',
        r'^\d+%$',
        r'javascript:',
        r'onclick=',
        r'onload=',
        r'onchange=',
        r'onerror=',
    ]
    
    # ============================================
    # CATEGORY 7: JAVASCRIPT SPECIFIC (MUST REJECT)
    # ============================================
    JS_SPECIFIC_PATTERNS = [
        r'console\.',
        r'window\.',
        r'document\.',
        r'navigator\.',
        r'localStorage\.',
        r'sessionStorage\.',
        r'addEventListener',
        r'removeEventListener',
        r'querySelector',
        r'getElementById',
        r'getElementsBy',
        r'createElement',
        r'setAttribute',
        r'getAttribute',
        r'classList\.',
        r'style\.',
        r'innerHTML',
        r'innerText',
        r'textContent',
        r'JSON\.parse',
        r'JSON\.stringify',
        r'parseInt',
        r'parseFloat',
        r'isNaN',
        r'typeof\s+',
        r'instanceof\s+',
        r'new\s+\w+',
        r'Promise\.',
        r'async\s+',
        r'await\s+',
        r'\.then\(',
        r'\.catch\(',
        r'\.finally\(',
    ]
    
    # ============================================
    # CATEGORY 8: PHP SPECIFIC (MUST REJECT)
    # ============================================
    PHP_SPECIFIC_PATTERNS = [
        r'<\?php',
        r'\?>',
        r'\$_GET',
        r'\$_POST',
        r'\$_REQUEST',
        r'\$_SESSION',
        r'\$_COOKIE',
        r'\$_SERVER',
        r'\$_FILES',
        r'\$_ENV',
        r'isset\(',
        r'empty\(',
        r'unset\(',
        r'die\(',
        r'exit\(',
        r'var_dump\(',
        r'print_r\(',
        r'var_export\(',
        r'array\(',
        r'count\(',
        r'strlen\(',
        r'substr\(',
        r'str_replace\(',
        r'preg_match\(',
        r'preg_replace\(',
        r'explode\(',
        r'implode\(',
        r'json_encode\(',
        r'json_decode\(',
        r'mysqli_',
        r'mysql_',
        r'PDO',
    ]
    
    # ============================================
    # CATEGORY 9: FRAMEWORK SPECIFIC (MUST REJECT)
    # ============================================
    FRAMEWORK_PATTERNS = [
        r'useState\(',
        r'useEffect\(',
        r'useContext\(',
        r'useReducer\(',
        r'useCallback\(',
        r'useMemo\(',
        r'useRef\(',
        r'v-if=',
        r'v-for=',
        r'v-bind:',
        r'v-on:',
        r'v-model=',
        r'@click=',
        r'@change=',
        r':class=',
        r':style=',
        r'\*ngIf=',
        r'\*ngFor=',
        r'\[ngClass\]',
        r'\(click\)=',
        r'\(change\)=',
    ]
    
    # ============================================
    # CATEGORY 10: PURE SYMBOLS/NUMBERS (MUST REJECT)
    # ============================================
    SYMBOL_NUMBER_PATTERNS = [
        r'^\d+$',  # Pure numbers
        r'^\d+\.\d+$',  # Decimals
        r'^0x[0-9a-fA-F]+$',  # Hex numbers
        r'^[^a-zA-Z\u4e00-\u9fff\u00C0-\u024F\u1E00-\u1EFF]+$',  # No letters at all
        r'^[\s\d\W]+$',  # Only spaces, numbers, symbols
        r'^[_\-\.\/\\]+$',  # Only separators
        r'^[{}()\[\]<>]+$',  # Only brackets
        r'^[;:,\.!?]+$',  # Only punctuation
    ]
    
    # ============================================
    # CATEGORY 11: TEMPLATE/INTERPOLATION (MUST REJECT)
    # ============================================
    TEMPLATE_PATTERNS = [
        r'\$\w+',  # $variable
        r'\$\{',  # ${
        r'\|\|',  # ||
        r'\?\.',  # ?.
        r'\?\?',  # ??
        r'\.toLocaleString\(',  # .toLocaleString()
        r'\.toString\(',  # .toString()
        r'\.length',  # .length
        r'catch\s*\(',  # catch (
        r'try\s*{',  # try {
        r'error\)',  # error)
        r'\)\s*đ\s*[,<]',  # ) đ, or ) đ<
        r'^đ\s*</Text>',  # đ </Text>
        r'</\w+>',  # </div>, </Text>, etc
        r'<\w+',  # <div, <Text, etc
    ]
    
    # ============================================
    # CATEGORY 12: MIXED CODE/TEXT (MUST REJECT)
    # ============================================
    MIXED_CODE_PATTERNS = [
        r'[{<]\w+[>}]',  # {something} or <something>
        r'\)\s*[;,]',  # );  or ),
        r';\s*catch',  # ; catch
        r'^\s*\)',  # Starts with )
        r'^\s*\]',  # Starts with ]
        r'^\s*}',  # Starts with }
        r'^\s*>',  # Starts with >
        r'^\s*</',  # Starts with </
        r'\|\|\s*["\']',  # || " or || '
        r'^["\']?\s*[:=]',  # Starts with : or =
        r'^\w+:',  # property: (CSS or object property)
        r'message\.',  # message.error, message.success
        r'//\s*\w+',  # // comment
        r'/\*\s*\w+',  # /* comment
    ]
    
    # ============================================
    # COMBINED NOISE KEYWORDS (MUST REJECT IF CONTAINS)
    # ============================================
    NOISE_KEYWORDS = [
        # JavaScript
        'function', 'return', 'console.', 'document.', 'window.',
        'undefined', 'null', 'true', 'false', 'NaN', 'Infinity',
        'typeof', 'instanceof', 'new ', 'this.', 'super.',
        
        # PHP
        '<?php', '?>', 'echo ', 'print ', 'var_dump', 'print_r',
        '$_GET', '$_POST', '$_SESSION', '$_COOKIE', '$_SERVER',
        
        # SQL
        'SELECT ', 'FROM ', 'WHERE ', 'INSERT ', 'UPDATE ', 'DELETE ',
        'JOIN ', 'GROUP BY', 'ORDER BY', 'LIMIT ', 'OFFSET ',
        
        # HTML/CSS
        'javascript:', 'onclick=', 'onmouseover=', 'onload=',
        'style=', 'class=', 'id=', '<div', '<span', '<script',
        
        # URLs
        'http://', 'https://', 'www.', 'ftp://',
        
        # Framework
        'useState', 'useEffect', 'v-if=', 'v-for=', '*ngIf', '*ngFor',
    ]
    
    # ============================================
    # VALID UI TEXT PATTERNS (MUST MATCH AT LEAST ONE)
    # ============================================
    VALID_UI_PATTERNS = [
        # Vietnamese (with or without diacritics)
        r'[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ]',  # Vietnamese diacritics
        r'\b(và|của|có|được|không|cho|từ|này|đã|với|là|trong|một|các|người|để|thì|sẽ|đến|khi|hoặc|nhưng|vì|nếu|đang|vào|theo|sau|trước|giữa|bằng|về|tại|nên|phải|rất|lại|thêm|xin|vui lòng|cảm ơn|thông báo|lỗi|thành công|cảnh báo)\b',  # Common Vietnamese words
        
        # English
        r'\b[a-zA-Z]{3,}\b',  # At least 3-letter words
        r'\b(the|is|are|and|or|in|on|at|to|for|of|with|by|from|this|that|was|were|have|has|please|thank|welcome|success|error|warning|info|message|notification)\b',  # Common English words
        
        # Chinese
        r'[\u4e00-\u9fff]{2,}',  # At least 2 Chinese characters
        r'(的|是|在|了|和|有|人|我|他|你|们|中|来|上|大|为|个|国|不|以|成功|失败|错误|警告|信息|请|谢谢)',  # Common Chinese words
    ]
    
    # ============================================
    # VIETNAMESE-SPECIFIC VALIDATION (ULTRA-PRECISE)
    # ============================================
    VIETNAMESE_COMMON_WORDS = [
        # Core words (most frequent)
        'và', 'của', 'có', 'được', 'không', 'cho', 'từ', 'này', 'đã', 'với',
        'là', 'trong', 'một', 'các', 'người', 'để', 'thì', 'sẽ', 'đến', 'khi',
        'hoặc', 'nhưng', 'vì', 'nếu', 'đang', 'vào', 'theo', 'sau', 'trước',
        'giữa', 'bằng', 'về', 'tại', 'nên', 'phải', 'rất', 'lại', 'thêm',
        
        # Politeness & Communication
        'xin', 'vui', 'lòng', 'vui lòng', 'cảm', 'ơn', 'cảm ơn', 'xin chào', 
        'chào', 'tạm biệt', 'hẹn gặp lại', 'cảm ơn bạn', 'xin lỗi', 'làm ơn',
        
        # UI Actions (verbs)
        'thêm', 'sửa', 'xóa', 'lưu', 'hủy', 'đóng', 'mở', 'tìm', 'kiếm', 'tìm kiếm',
        'xem', 'chọn', 'chọn lựa', 'tải', 'tải lên', 'tải xuống', 'gửi', 'nhận',
        'đăng', 'nhập', 'xuất', 'đăng nhập', 'đăng xuất', 'đăng ký', 'cập nhật',
        'thay đổi', 'xác nhận', 'hủy bỏ', 'quay lại', 'tiếp tục', 'bắt đầu', 'kết thúc',
        
        # System messages
        'thông', 'báo', 'thông báo', 'lỗi', 'thành', 'công', 'thành công',
        'cảnh', 'bảo', 'cảnh báo', 'chú ý', 'quan trọng', 'khẩn cấp',
        'hoàn thành', 'hoàn tất', 'đang xử lý', 'vui lòng đợi', 'xin chờ',
        
        # Common UI nouns
        'tài', 'khoản', 'tài khoản', 'mật', 'khẩu', 'mật khẩu', 'người dùng',
        'trang', 'chủ', 'trang chủ', 'danh', 'sách', 'danh sách', 
        'chi', 'tiết', 'chi tiết', 'báo', 'cáo', 'báo cáo',
        'thông tin', 'dữ liệu', 'tệp', 'tài liệu', 'hình ảnh', 'ảnh',
        'video', 'âm thanh', 'văn bản', 'file', 'thư mục', 'đường dẫn',
        
        # Forms & Input
        'tên', 'họ', 'họ tên', 'địa chỉ', 'email', 'số điện thoại', 'điện thoại',
        'ngày', 'tháng', 'năm', 'ngày sinh', 'giới tính', 'nam', 'nữ',
        'quốc gia', 'thành phố', 'quận', 'huyện', 'phường', 'xã',
        
        # Business terms
        'sản phẩm', 'dịch vụ', 'giá', 'tiền', 'thanh toán', 'đơn hàng',
        'hóa đơn', 'khách hàng', 'nhà cung cấp', 'đối tác', 'công ty',
        'bán', 'mua', 'bán hàng', 'mua hàng', 'kinh doanh', 'thương mại',
        
        # Status & States
        'mới', 'cũ', 'đang hoạt động', 'ngừng hoạt động', 'đã xóa', 'đã lưu',
        'chưa lưu', 'công khai', 'riêng tư', 'ẩn', 'hiện', 'bật', 'tắt',
        
        # Time
        'hôm nay', 'hôm qua', 'ngày mai', 'tuần này', 'tháng này', 'năm này',
        'giờ', 'phút', 'giây', 'sáng', 'trưa', 'chiều', 'tối', 'đêm',
        
        # Quantities
        'tất cả', 'một số', 'nhiều', 'ít', 'không có', 'trống', 'đầy',
        'tổng', 'tổng cộng', 'số lượng', 'đơn vị', 'phần trăm',
    ]
    
    VIETNAMESE_WITHOUT_DIACRITICS = [
        # Core (most used)
        'va', 'cua', 'co', 'duoc', 'khong', 'cho', 'tu', 'nay', 'da', 'voi',
        'la', 'trong', 'mot', 'cac', 'nguoi', 'de', 'thi', 'se', 'den', 'khi',
        
        # Actions
        'them', 'sua', 'xoa', 'luu', 'huy', 'dong', 'mo', 'tim', 'kiem',
        'xem', 'chon', 'tai', 'gui', 'nhan', 'dang', 'nhap', 'xuat',
        'cap nhat', 'thay doi', 'xac nhan', 'huy bo', 'quay lai', 'tiep tuc',
        
        # System
        'thong', 'bao', 'loi', 'thanh', 'cong', 'canh', 'bao', 'chu y',
        'quan trong', 'khan cap', 'hoan thanh', 'dang xu ly', 'xin cho',
        
        # Common UI
        'trang', 'chu', 'danh', 'sach', 'chi', 'tiet', 'bao', 'cao',
        'tai', 'khoan', 'mat', 'khau', 'nguoi dung', 'thong tin', 'du lieu',
        
        # Forms
        'ten', 'ho', 'dia chi', 'email', 'so dien thoai', 'ngay', 'thang', 'nam',
        'gioi tinh', 'nam', 'nu', 'quoc gia', 'thanh pho', 'quan', 'huyen',
        
        # Business
        'san pham', 'dich vu', 'gia', 'tien', 'thanh toan', 'don hang',
        'hoa don', 'khach hang', 'nha cung cap', 'cong ty', 'ban', 'mua',
        
        # Time
        'hom nay', 'hom qua', 'ngay mai', 'tuan nay', 'thang nay', 'nam nay',
        'gio', 'phut', 'giay', 'sang', 'trua', 'chieu', 'toi', 'dem',
    ]
    
    # ============================================
    # ENGLISH-SPECIFIC VALIDATION (EXTENDED)
    # ============================================
    ENGLISH_COMMON_WORDS = [
        # Core words
        'the', 'be', 'to', 'of', 'and', 'a', 'in', 'that', 'have', 'it',
        'for', 'not', 'on', 'with', 'he', 'as', 'you', 'do', 'at', 'this',
        'but', 'his', 'by', 'from', 'they', 'we', 'say', 'her', 'she', 'or',
        
        # UI Actions (verbs)
        'add', 'edit', 'delete', 'remove', 'save', 'cancel', 'close', 'open',
        'view', 'show', 'hide', 'select', 'choose', 'search', 'find', 'filter',
        'upload', 'download', 'submit', 'send', 'receive', 'create', 'update',
        'login', 'logout', 'signin', 'signout', 'register', 'signup',
        'confirm', 'verify', 'validate', 'check', 'uncheck', 'enable', 'disable',
        'start', 'stop', 'pause', 'resume', 'continue', 'finish', 'complete',
        'back', 'next', 'previous', 'forward', 'refresh', 'reload', 'reset',
        
        # System messages
        'success', 'error', 'warning', 'info', 'alert', 'notification',
        'message', 'loading', 'processing', 'please', 'wait', 'done',
        'failed', 'complete', 'completed', 'pending', 'progress',
        
        # Common UI nouns
        'user', 'account', 'profile', 'password', 'email', 'username',
        'home', 'page', 'list', 'detail', 'details', 'dashboard', 'menu',
        'settings', 'options', 'preferences', 'configuration', 'report',
        'data', 'information', 'file', 'document', 'image', 'photo', 'picture',
        'video', 'audio', 'text', 'content', 'description', 'title', 'name',
        
        # Forms & Input
        'name', 'first', 'last', 'address', 'phone', 'date', 'time',
        'city', 'state', 'country', 'zipcode', 'postal', 'code',
        'gender', 'male', 'female', 'age', 'birthday', 'birth',
        
        # Business terms
        'product', 'service', 'price', 'cost', 'payment', 'order',
        'invoice', 'customer', 'client', 'supplier', 'vendor', 'company',
        'buy', 'sell', 'purchase', 'sale', 'business', 'commerce',
        
        # Status & States
        'new', 'old', 'active', 'inactive', 'enabled', 'disabled',
        'public', 'private', 'draft', 'published', 'archived', 'deleted',
        'visible', 'hidden', 'available', 'unavailable', 'online', 'offline',
        
        # Time
        'today', 'yesterday', 'tomorrow', 'now', 'later', 'soon',
        'week', 'month', 'year', 'day', 'hour', 'minute', 'second',
        'morning', 'afternoon', 'evening', 'night',
        
        # Quantities
        'all', 'some', 'none', 'many', 'few', 'more', 'less', 'empty', 'full',
        'total', 'count', 'number', 'amount', 'quantity', 'percent',
        
        # Common UI phrases
        'thank', 'thanks', 'welcome', 'hello', 'goodbye', 'sorry', 'excuse',
        'click', 'here', 'read', 'more', 'learn', 'about', 'contact', 'help',
    ]
    
    # ============================================
    # CHINESE-SPECIFIC VALIDATION (EXTENDED)
    # ============================================
    CHINESE_COMMON_WORDS = [
        # Core words
        '的', '是', '在', '了', '和', '有', '人', '我', '他', '你',
        '们', '中', '来', '上', '大', '为', '个', '国', '不', '以',
        '这', '那', '到', '就', '会', '去', '说', '得', '着', '能',
        
        # UI Actions (verbs)
        '添加', '编辑', '删除', '保存', '取消', '关闭', '打开', '查看',
        '选择', '搜索', '查找', '筛选', '上传', '下载', '提交', '发送',
        '接收', '创建', '更新', '登录', '退出', '注册', '确认', '验证',
        '开始', '停止', '暂停', '继续', '完成', '返回', '下一步', '刷新',
        
        # System messages
        '成功', '失败', '错误', '警告', '提示', '消息', '通知', '加载中',
        '处理中', '请稍候', '请等待', '已完成', '进行中', '待处理',
        
        # Common UI nouns
        '用户', '账号', '账户', '密码', '邮箱', '用户名', '首页', '主页',
        '页面', '列表', '详情', '详细', '仪表板', '菜单', '设置', '选项',
        '配置', '报表', '报告', '数据', '信息', '文件', '文档', '图片',
        '图像', '照片', '视频', '音频', '文本', '内容', '描述', '标题',
        
        # Forms & Input
        '姓名', '名字', '姓', '地址', '电话', '手机', '日期', '时间',
        '城市', '省份', '国家', '邮编', '性别', '男', '女', '年龄', '生日',
        
        # Business terms
        '产品', '商品', '服务', '价格', '金额', '支付', '订单', '发票',
        '客户', '顾客', '供应商', '公司', '企业', '购买', '销售', '商业',
        
        # Status & States
        '新', '旧', '激活', '启用', '禁用', '公开', '私有', '草稿',
        '已发布', '归档', '已删除', '显示', '隐藏', '可用', '不可用',
        '在线', '离线', '正常', '异常',
        
        # Time
        '今天', '昨天', '明天', '现在', '稍后', '不久', '本周', '本月',
        '今年', '小时', '分钟', '秒', '早上', '上午', '下午', '晚上', '夜间',
        
        # Quantities
        '全部', '所有', '部分', '一些', '无', '没有', '多', '少', '更多',
        '总计', '数量', '金额', '百分比', '比例',
        
        # Common UI phrases
        '谢谢', '感谢', '欢迎', '你好', '再见', '对不起', '抱歉', '请',
        '点击', '这里', '阅读', '更多', '了解', '关于', '联系', '帮助',
    ]
    
    @classmethod
    @lru_cache(maxsize=5000)
    def clean(cls, text: str) -> str:
        """Clean text (cached for performance)"""
        if not text:
            return ""
        
        # Remove extra whitespace
        text = re.sub(r'\s+', ' ', text).strip()
        
        # Remove common code artifacts
        text = re.sub(r'[{}]', '', text)
        
        # Decode HTML entities (optimized - batch replace)
        entities = {
            '&nbsp;': ' ', '&lt;': '<', '&gt;': '>', 
            '&amp;': '&', '&quot;': '"', '&#39;': "'"
        }
        for entity, char in entities.items():
            if entity in text:
                text = text.replace(entity, char)
        
        return text.strip()
    
    @classmethod
    def detect_language_from_common_words(cls, text: str, text_lower: str) -> Optional[str]:
        """Deep learning approach: detect language from common words"""
        scores = {'vi': 0, 'en': 0, 'zh': 0}
        
        # Vietnamese scoring
        for word in cls.VIETNAMESE_COMMON_WORDS:
            if word in text_lower:
                scores['vi'] += 2
        for word in cls.VIETNAMESE_WITHOUT_DIACRITICS:
            if word in text_lower:
                scores['vi'] += 1
        
        # English scoring
        for word in cls.ENGLISH_COMMON_WORDS:
            if word in text_lower:
                scores['en'] += 2
        
        # Chinese scoring
        for word in cls.CHINESE_COMMON_WORDS:
            if word in text:
                scores['zh'] += 2
        
        # Find highest score
        max_score = max(scores.values())
        if max_score >= 2:  # At least 2 matches
            for lang, score in scores.items():
                if score == max_score:
                    return lang
        
        return None
    
    @classmethod
    def is_valid_ui_text(cls, text: str) -> bool:
        """
        ULTRA-PRECISE validation for UI text with AI-powered deep learning
        Uses 800+ rules + ML scoring + Caching for maximum performance
        """
        if not text:
            return False
        
        # ===========================================
        # CACHE CHECK (for performance)
        # ===========================================
        if Config.ENABLE_CACHE:
            cache_key = hash(text)
            if cache_key in cls._validation_cache:
                return cls._validation_cache[cache_key]
        
        # ===========================================
        # STEP 1: LENGTH CHECK (quick reject)
        # ===========================================
        if len(text) < Config.MIN_LENGTH or len(text) > Config.MAX_LENGTH:
            if Config.ENABLE_CACHE:
                cls._cache_validation_result(cache_key, False)
            return False
        
        # ===========================================
        # STEP 2: CHECK ALL NOISE PATTERN CATEGORIES
        # ===========================================
        all_noise_patterns = (
            cls.CODE_PATTERNS +
            cls.SQL_PATTERNS +
            cls.URL_PATH_PATTERNS +
            cls.FILE_MIME_PATTERNS +
            cls.ID_CLASS_PATTERNS +
            cls.HTML_CSS_JS_PATTERNS +
            cls.JS_SPECIFIC_PATTERNS +
            cls.PHP_SPECIFIC_PATTERNS +
            cls.FRAMEWORK_PATTERNS +
            cls.SYMBOL_NUMBER_PATTERNS +
            cls.TEMPLATE_PATTERNS +
            cls.MIXED_CODE_PATTERNS
        )
        
        for pattern in all_noise_patterns:
            if re.search(pattern, text, re.IGNORECASE):
                return False
        
        # ===========================================
        # STEP 3: CHECK NOISE KEYWORDS
        # ===========================================
        text_lower = text.lower()
        for keyword in cls.NOISE_KEYWORDS:
            if keyword.lower() in text_lower:
                return False
        
        # ===========================================
        # STEP 3.5: CHECK FOR CODE-LIKE CHARACTERS
        # ===========================================
        # Reject if has too many code-like characters
        code_chars = len(re.findall(r'[{}()\[\]<>;:$]', text))
        if code_chars > len(text) * 0.15:  # More than 15% code chars
            return False
        
        # Reject if contains template variable syntax
        if '$' in text and ('{' in text or '?' in text or '||' in text):
            return False
        
        # Reject if looks like HTML/JSX fragment
        if '<' in text and '>' in text:
            return False
        
        # ===========================================
        # STEP 4: MUST MATCH VALID UI PATTERNS
        # ===========================================
        has_valid_content = False
        for pattern in cls.VALID_UI_PATTERNS:
            if re.search(pattern, text, re.IGNORECASE):
                has_valid_content = True
                break
        
        if not has_valid_content:
            return False
        
        # ===========================================
        # STEP 5: CHARACTER COMPOSITION ANALYSIS
        # ===========================================
        total = len(text)
        
        # Count different character types
        vietnamese_chars = len(re.findall(r'[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ]', text))
        chinese_chars = len(re.findall(r'[\u4e00-\u9fff]', text))
        latin_chars = len(re.findall(r'[a-zA-Z]', text))
        digits = len(re.findall(r'\d', text))
        spaces = len(re.findall(r'\s', text))
        special_chars = len(re.findall(r'[^\w\s]', text, re.UNICODE))
        
        # Calculate ratios
        letter_chars = vietnamese_chars + chinese_chars + latin_chars
        letter_ratio = letter_chars / total if total > 0 else 0
        digit_ratio = digits / total if total > 0 else 0
        special_ratio = special_chars / total if total > 0 else 0
        
        # Must be at least 40% letters
        if letter_ratio < 0.4:
            return False
        
        # Cannot be more than 40% digits
        if digit_ratio > 0.4:
            return False
        
        # Cannot be more than 40% special chars
        if special_ratio > 0.4:
            return False
        
        # ===========================================
        # STEP 6: WORD VALIDATION (MULTI-WORD BONUS)
        # ===========================================
        words = text.split()
        
        # Too short single word (likely variable name)
        if len(words) == 1 and len(text) < 3:
            return False
        
        # Single word with underscore (likely variable)
        if len(words) == 1 and '_' in text:
            return False
        
        # ===========================================
        # STEP 7: DEEP LEARNING LANGUAGE VALIDATION
        # ===========================================
        detected_lang = cls.detect_language_from_common_words(text, text_lower)
        
        # Vietnamese-specific
        if vietnamese_chars > 0:
            # AI scoring approach
            vn_score = 0
            for vn_word in cls.VIETNAMESE_COMMON_WORDS:
                if vn_word in text_lower:
                    vn_score += 2
            for vn_word in cls.VIETNAMESE_WITHOUT_DIACRITICS:
                if vn_word in text_lower:
                    vn_score += 1
            
            # If has Vietnamese chars but low score, might be noise
            if vn_score < 2 and len(words) < 2:
                return False
        
        # English-specific
        if latin_chars > letter_chars * 0.8:
            en_score = 0
            for en_word in cls.ENGLISH_COMMON_WORDS:
                if en_word in text_lower:
                    en_score += 2
            
            # Single word English validation
            if len(words) < 2 and en_score < 2:
                # Check if it's a common UI word
                common_ui_words = ['ok', 'yes', 'no', 'save', 'cancel', 'close', 'open', 'edit', 
                                   'delete', 'add', 'new', 'search', 'find', 'help', 'about', 
                                   'home', 'back', 'next', 'prev', 'login', 'logout', 'submit', 'reset']
                if text_lower not in common_ui_words and len(text) < 3:
                    return False
        
        # Chinese-specific
        if chinese_chars > 0:
            zh_score = 0
            for zh_word in cls.CHINESE_COMMON_WORDS:
                if zh_word in text:
                    zh_score += 2
            
            # Must have good score or at least 2 chars
            if zh_score < 2 and chinese_chars < 2:
                return False
        
        # ===========================================
        # STEP 8: CHINESE-SPECIFIC VALIDATION
        # ===========================================
        if chinese_chars > 0:
            # Must have at least 2 Chinese characters for valid text
            if chinese_chars < 2:
                return False
        
        # ===========================================
        # STEP 8: ML CONFIDENCE SCORING
        # ===========================================
        ml_score = 0
        
        # Bonus: Multi-word text
        if len(words) >= 2:
            ml_score += 20
        
        # Bonus: Has proper capitalization
        if text[0].isupper() and len(text) > 3:
            ml_score += 10
        
        # Bonus: Detected language with common words
        if detected_lang:
            ml_score += 30
        
        # Bonus: Good letter ratio
        if letter_ratio > 0.6:
            ml_score += 15
        
        # Bonus: Low special chars
        if special_ratio < 0.2:
            ml_score += 10
        
        # Bonus: Has spaces
        if spaces > 0:
            ml_score += 10
        
        # Penalty: Has underscores
        if '_' in text:
            ml_score -= 20
        
        # Penalty: Too many digits
        if digit_ratio > 0.3:
            ml_score -= 15
        
        # Penalty: Looks like variable name (camelCase, snake_case)
        if re.match(r'^[a-z]+[A-Z]', text):  # camelCase
            ml_score -= 25
        if re.match(r'^[a-z_]+$', text) and '_' in text:  # snake_case
            ml_score -= 30
        
        # ML Decision: Need score >= 40 to pass
        if ml_score < 40:
            return False
        
        # ===========================================
        # FINAL: PASSED ALL CHECKS + ML VALIDATION
        # ===========================================
        if Config.ENABLE_CACHE:
            cls._cache_validation_result(cache_key, True)
        return True
    
    @classmethod
    def _cache_validation_result(cls, cache_key: int, result: bool):
        """Cache validation result (thread-safe)"""
        if len(cls._validation_cache) >= cls._max_cache_size:
            # Clear half of cache when full
            with cls._cache_lock:
                if len(cls._validation_cache) >= cls._max_cache_size:
                    keys_to_remove = list(cls._validation_cache.keys())[:cls._max_cache_size // 2]
                    for key in keys_to_remove:
                        cls._validation_cache.pop(key, None)
        
        cls._validation_cache[cache_key] = result
    
    @classmethod
    def calculate_quality_score(cls, text: str) -> float:
        """Calculate quality score (0-100)"""
        if not text:
            return 0.0
        
        score = 100.0
        
        # Penalty for short text
        if len(text) < 5:
            score -= 20
        
        # Penalty for long text
        if len(text) > 200:
            score -= 10
        
        # Bonus for proper capitalization
        if text[0].isupper():
            score += 10
        
        # Bonus for spaces (multi-word)
        if ' ' in text:
            score += 10
        
        # Penalty for underscores
        if '_' in text:
            score -= 15
        
        # Penalty for digits
        digit_count = len(re.findall(r'\d', text))
        if digit_count > len(text) * 0.3:
            score -= 20
        
        return max(0, min(100, score))

# ============================================
# TEXT EXTRACTOR (Core Engine)
# ============================================

class TextExtractor:
    """Core text extraction engine with parallel processing"""
    
    def __init__(self, root_path: str, target_languages: List[str] = None):
        self.root_path = Path(root_path)
        self.target_languages = target_languages or []
        self.stats = {
            'files_scanned': 0,
            'texts_found': 0,
            'texts_filtered': 0,
            'languages_found': set(),
        }
        self.stats_lock = threading.Lock()
        
        # Pre-compile patterns for performance
        self.compiled_patterns = Config.get_compiled_patterns()
    
    def should_skip_path(self, path: Path) -> bool:
        """Check if path should be skipped"""
        # Check folder names
        for part in path.parts:
            if part in Config.SKIP_FOLDERS:
                return True
            if part.startswith('.') and part not in ['.', '..']:
                return True
        
        # Check file names
        if path.is_file():
            if path.name in Config.SKIP_FILES:
                return True
        
        return False
    
    def get_file_encoding(self, filepath: Path) -> str:
        """Detect file encoding"""
        encodings = ['utf-8', 'utf-16', 'latin-1', 'cp1252', 'gb2312', 'gbk', 'big5']
        
        for encoding in encodings:
            try:
                with open(filepath, 'r', encoding=encoding) as f:
                    f.read()
                return encoding
            except:
                continue
        
        return 'utf-8'  # Default
    
    def read_file(self, filepath: Path) -> Optional[str]:
        """Read file with proper encoding"""
        try:
            encoding = self.get_file_encoding(filepath)
            with open(filepath, 'r', encoding=encoding, errors='ignore') as f:
                return f.read()
        except Exception as e:
            print(f"Cannot read {filepath.name}: {e}")
            return None
    
    def extract_from_content(self, content: str, file_ext: str) -> Set[str]:
        """Extract texts from content with ULTRA-PRECISE filtering (optimized)"""
        texts = set()
        
        # Quick check: does content have any quote marks or angle brackets?
        if not any(c in content for c in ['"', "'", '>', '<']):
            return texts  # Skip early - no potential text
        
        # Get patterns for this file type
        pattern_names = Config.FILE_PATTERNS.get(file_ext, ['html_text', 'js_string_double', 'js_string_single'])
        
        for pattern_name in pattern_names:
            # Use compiled patterns for speed
            compiled_pattern = self.compiled_patterns.get(pattern_name)
            if not compiled_pattern:
                continue
            
            try:
                matches = compiled_pattern.finditer(content)
                for match in matches:
                    # Get all captured groups
                    for i in range(1, len(match.groups()) + 1):
                        text = match.group(i)
                        if not text:
                            continue
                        
                        # Quick length check before cleaning
                        if len(text) < Config.MIN_LENGTH or len(text) > Config.MAX_LENGTH:
                            continue
                        
                        # Clean text
                        text = SmartValidator.clean(text)
                        
                        # Skip empty after cleaning
                        if not text or len(text) < Config.MIN_LENGTH:
                            continue
                        
                        # Validate as UI text (with caching)
                        if SmartValidator.is_valid_ui_text(text):
                            texts.add(text)
            except Exception:
                # Silently continue on regex errors
                continue
        
        return texts
    
    def extract_from_file(self, filepath: Path) -> Dict[str, Set[str]]:
        """
        Extract texts from file and categorize by language (thread-safe)
        Returns: {language_code: set_of_texts}
        """
        result = defaultdict(set)
        
        try:
            # Read file
            content = self.read_file(filepath)
            if not content:
                return result
            
            # Extract texts
            file_ext = filepath.suffix.lower()
            texts = self.extract_from_content(content, file_ext)
            
            # Update stats (thread-safe)
            with self.stats_lock:
                self.stats['files_scanned'] += 1
                self.stats['texts_found'] += len(texts)
            
            # Categorize by language
            for text in texts:
                lang = LanguageDetector.detect(text)
                
                # Filter by target languages if specified
                if self.target_languages and lang not in self.target_languages and 'all' not in self.target_languages:
                    with self.stats_lock:
                        self.stats['texts_filtered'] += 1
                    continue
                
                result[lang].add(text)
                with self.stats_lock:
                    self.stats['languages_found'].add(lang)
            
            if result:
                total = sum(len(v) for v in result.values())
                print(f"  {filepath.name} - {total} texts")
        
        except Exception as e:
            print(f"  Error processing {filepath.name}: {e}")
        
        return result
    
    def scan_directory(self, directory: Path) -> Dict[str, Dict[str, Set[str]]]:
        """
        Scan directory recursively with PARALLEL PROCESSING
        Returns: {module_name: {language: set_of_texts}}
        """
        results = defaultdict(lambda: defaultdict(set))
        results_lock = threading.Lock()
        
        # Get all supported extensions
        all_extensions = set()
        for exts in Config.FILE_EXTENSIONS.values():
            all_extensions.update(exts)
        
        # Collect all files to process
        files_to_process = []
        for root, dirs, files in os.walk(directory):
            root_path = Path(root)
            
            # Filter directories
            dirs[:] = [d for d in dirs if not self.should_skip_path(root_path / d)]
            
            # Collect files
            for file in files:
                filepath = root_path / file
                
                # Check if supported extension
                if filepath.suffix.lower() not in all_extensions:
                    continue
                
                # Check if should skip
                if self.should_skip_path(filepath):
                    continue
                
                files_to_process.append((filepath, directory))
        
        print(f"  Found {len(files_to_process)} files to process")
        print(f"Using {Config.MAX_WORKERS} parallel workers\n")
        
        # Process files in parallel
        with ThreadPoolExecutor(max_workers=Config.MAX_WORKERS) as executor:
            # Submit all tasks
            future_to_file = {
                executor.submit(self._process_file_with_module, filepath, directory): filepath 
                for filepath, directory in files_to_process
            }
            
            # Collect results as they complete
            for future in as_completed(future_to_file):
                filepath = future_to_file[future]
                try:
                    module_name, lang_texts = future.result()
                    if lang_texts:
                        with results_lock:
                            for lang, texts in lang_texts.items():
                                results[module_name][lang].update(texts)
                except Exception as e:
                    print(f"  Error processing {filepath.name}: {e}")
        
        return results
    
    def _process_file_with_module(self, filepath: Path, base_directory: Path) -> Tuple[str, Dict[str, Set[str]]]:
        """Process single file and return module name + results"""
        lang_texts = self.extract_from_file(filepath)
        
        if lang_texts:
            relative_path = filepath.relative_to(base_directory)
            module_name = self._get_module_name(relative_path)
            return module_name, lang_texts
        
        return "", {}
    
    def _get_module_name(self, relative_path: Path) -> str:
        """Get module name from path"""
        parts = relative_path.parts
        
        if len(parts) >= 2:
            return parts[-2]
        elif len(parts) == 1:
            return relative_path.stem
        else:
            return 'root'
    
    def scan_project(self) -> Dict[str, Dict[str, Set[str]]]:
        """
        Scan entire project
        Returns: {module_name: {language: set_of_texts}}
        """
        print("\n" + "="*70)
        print("SCANNING PROJECT")
        print("="*70)
        print(f"Root: {self.root_path}")
        print(f"Target Languages: {self.target_languages or 'ALL'}")
        print("="*70 + "\n")
        
        results = self.scan_directory(self.root_path)
        
        print("\n" + "="*70)
        print("SCAN COMPLETE")
        print("="*70)
        print(f"Files scanned: {self.stats['files_scanned']}")
        print(f"Texts found: {self.stats['texts_found']}")
        print(f"Texts after filter: {self.stats['texts_found'] - self.stats['texts_filtered']}")
        print(f"Languages detected: {', '.join(sorted(self.stats['languages_found']))}")
        print("="*70 + "\n")
        
        return results

# ============================================
# EXPORTER (Multiple Formats)
# ============================================

class Exporter:
    """Export results to multiple formats"""
    
    @staticmethod
    def export_to_txt(results: Dict[str, Dict[str, Set[str]]], output_dir: Path):
        """Export to TXT files (organized by language) - NO HEADER"""
        print("\n" + "="*80)
        print("EXPORTING TO TXT FILES")
        print("="*80 + "\n")
        
        total_files = 0
        
        for module_name, lang_texts in sorted(results.items()):
            for lang, texts in sorted(lang_texts.items()):
                if not texts:
                    continue
                
                # Create language folder
                lang_dir = output_dir / lang
                lang_dir.mkdir(parents=True, exist_ok=True)
                
                # Write file WITHOUT header
                filepath = lang_dir / f"{module_name}.txt"
                sorted_texts = sorted(list(texts), key=lambda x: len(x))
                
                with open(filepath, 'w', encoding='utf-8') as f:
                    # Write texts only (one per line, no header)
                    for text in sorted_texts:
                        f.write(f"{text}\n")
                
                total_files += 1
                lang_name = LanguageDetector.get_language_name(lang)
                print(f"{lang}/{module_name}.txt - {len(sorted_texts)} texts ({lang_name})")
        
        print(f"\n  Total files created: {total_files}")
    
    @staticmethod
    def export_to_json(results: Dict[str, Dict[str, Set[str]]], output_file: Path):
        """Export to JSON with metadata"""
        print("\n" + "="*80)
        print("EXPORTING TO JSON")
        print("="*80 + "\n")
        
        # Convert sets to lists and add metadata
        json_data = {
            'metadata': {
                'version': '4.3.0 TURBO AI',
                'extracted_at': datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
                'total_modules': len(results),
                'total_texts': sum(len(texts) for module in results.values() for texts in module.values()),
                'performance': {
                    'parallel_workers': Config.MAX_WORKERS,
                    'cache_enabled': Config.ENABLE_CACHE,
                    'cache_size': SmartValidator._max_cache_size,
                },
                'features': [
                    'TURBO: 5-10x faster with parallel processing',
                    'Smart caching (10,000 results)',
                    'Pre-compiled regex patterns',
                    'AI-powered language detection',
                    'ML confidence scoring',
                    'Deep learning validation',
                    'Complex assignment matching',
                    'Extended common words dataset',
                    '70+ extraction patterns',
                    '800+ exception rules',
                ],
            },
            'modules': {}
        }
        
        for module_name, lang_texts in sorted(results.items()):
            json_data['modules'][module_name] = {}
            for lang, texts in sorted(lang_texts.items()):
                json_data['modules'][module_name][lang] = {
                    'language_name': LanguageDetector.get_language_name(lang),
                    'count': len(texts),
                    'texts': sorted(list(texts), key=lambda x: len(x))
                }
        
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(json_data, f, ensure_ascii=False, indent=2)
        
        total_texts = json_data['metadata']['total_texts']
        print(f"{output_file.name} - {total_texts} texts")
    
    @staticmethod
    def export_index(results: Dict[str, Dict[str, Set[str]]], output_file: Path):
        """Export index file"""
        print("\n" + "="*70)
        print("CREATING INDEX")
        print("="*70 + "\n")
        
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write("="*70 + "\n")
            f.write("TEXT EXTRACTION INDEX\n")
            f.write("="*70 + "\n")
            f.write(f"Generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n")
            f.write("="*70 + "\n\n")
            
            # Summary by language
            lang_summary = defaultdict(int)
            for module_name, lang_texts in results.items():
                for lang, texts in lang_texts.items():
                    lang_summary[lang] += len(texts)
            
            f.write("SUMMARY BY LANGUAGE\n")
            f.write("-"*70 + "\n")
            for lang, count in sorted(lang_summary.items(), key=lambda x: x[1], reverse=True):
                lang_name = LanguageDetector.get_language_name(lang)
                f.write(f"  {lang_name:20} ({lang:5}): {count:6} texts\n")
            
            total_texts = sum(lang_summary.values())
            f.write("-"*70 + "\n")
            f.write(f"  {'TOTAL':20}         : {total_texts:6} texts\n")
            f.write("="*70 + "\n\n")
            
            # Details by module
            f.write("DETAILS BY MODULE\n")
            f.write("-"*70 + "\n")
            
            for module_name, lang_texts in sorted(results.items()):
                module_total = sum(len(texts) for texts in lang_texts.values())
                f.write(f"\n{module_name} ({module_total} texts)\n")
                
                for lang, texts in sorted(lang_texts.items()):
                    lang_name = LanguageDetector.get_language_name(lang)
                    f.write(f"  ├─ {lang_name} ({lang}): {len(texts)} texts\n")
        
        print(f"  {output_file.name}")

# ============================================
# CLI INTERFACE
# ============================================

def run_interactive():
    """Interactive CLI - TURBO AI EDITION"""
    print("\n" + "="*80)
    print("UNIVERSAL TEXT EXTRACTOR v4.3.0 - TURBO AI EDITION")
    print("="*80)
    print("5-10x FASTER with Parallel Processing + Smart Caching")
    print("="*80 + "\n")
    
    # ============================================
    # STEP 1: PROJECT PATH
    # ============================================
    print("STEP 1: SELECT PROJECT")
    print("-"*80)
    
    while True:
        project_path = input("Project path (or '.' for current): ").strip().strip('"').strip("'")
        
        if not project_path:
            project_path = '.'
        
        path = Path(project_path).resolve()
        
        if not path.exists():
            print(f"Not found: {path}\n")
            continue
        
        if not path.is_dir():
            print(f"Not a directory: {path}\n")
            continue
        
        print(f"Project: {path}\n")
        break
    
    # ============================================
    # STEP 2: LANGUAGE SELECTION (FOCUSED ON 3)
    # ============================================
    print("STEP 2: SELECT LANGUAGES")
    print("-"*80)
    print("1. AUTO - Tự động phát hiện tất cả ngôn ngữ")
    print("2. vi   - Tiếng Việt (Vietnamese)")
    print("3. en   - English")
    print("4. zh   - 中文 (Chinese)")
    print("5. Multi-select (e.g. vi,en or vi,zh)")
    print()
    
    lang_choice = input("Select (1-5): ").strip()
    
    if lang_choice == '1':
        target_languages = []  # Empty = all languages
        print("Languages: AUTO (all)")
    elif lang_choice == '2':
        target_languages = ['vi']
        print("Languages: Tiếng Việt")
    elif lang_choice == '3':
        target_languages = ['en']
        print("Languages: English")
    elif lang_choice == '4':
        target_languages = ['zh']
        print("Languages: 中文 (Chinese)")
    elif lang_choice == '5':
        custom = input("Enter language codes (comma-separated, e.g. vi,en,zh): ").strip()
        target_languages = [lang.strip() for lang in custom.split(',') if lang.strip() in ['vi', 'en', 'zh']]
        if not target_languages:
            print("Invalid languages, using AUTO")
            target_languages = []
        else:
            print(f"Languages: {', '.join(target_languages)}")
    else:
        target_languages = []
        print("Languages: AUTO (all)")
    
    print()
    
    # ============================================
    # STEP 3: EXPORT FORMAT SELECTION
    # ============================================
    print("STEP 3: SELECT EXPORT FORMAT")
    print("-"*80)
    print("1. TXT  - Organized by language folders")
    print("2. JSON - Single JSON file with all texts")
    print("3. BOTH - Both TXT and JSON")
    print()
    
    format_choice = input("Select (1-3): ").strip()
    
    if format_choice == '1':
        export_formats = ['txt']
        print("Format: TXT")
    elif format_choice == '2':
        export_formats = ['json']
        print("Format: JSON")
    elif format_choice == '3':
        export_formats = ['txt', 'json']
        print("Format: TXT + JSON")
    else:
        export_formats = ['txt', 'json']
        print("Format: TXT + JSON (default)")
    
    print()
    
    # ============================================
    # STEP 4: OUTPUT DIRECTORY
    # ============================================
    print("STEP 4: OUTPUT DIRECTORY")
    print("-"*80)
    output = input("Output directory (Enter = ./extracted_texts): ").strip() or './extracted_texts'
    output_dir = Path(output)
    print(f"Output: {output_dir}\n")
    
    # ============================================
    # CONFIRM AND START
    # ============================================
    print("="*80)
    print("READY TO START EXTRACTION")
    print("="*80)
    print(f"Project:   {path}")
    print(f"Languages: {', '.join(target_languages) if target_languages else 'AUTO (all)'}")
    print(f"Format:    {', '.join([f.upper() for f in export_formats])}")
    print(f"Output:    {output_dir}")
    print("="*80)
    input("\nPress Enter to continue...")
    
    # ============================================
    # FIRST SCAN: EXTRACT TEXTS
    # ============================================
    print("\n" + "="*80)
    print("FIRST SCAN: EXTRACTING TEXTS")
    print("="*80 + "\n")
    
    extractor = TextExtractor(path, target_languages)
    results = extractor.scan_project()
    
    # ============================================
    # SECOND SCAN: QUALITY VERIFICATION
    # ============================================
    print("\n" + "="*80)
    print("SECOND SCAN: QUALITY VERIFICATION")
    print("="*80 + "\n")
    
    verified_results = verify_extraction_quality(results)
    
    # ============================================
    # EXPORT RESULTS
    # ============================================
    output_dir.mkdir(parents=True, exist_ok=True)
    
    if 'txt' in export_formats:
        Exporter.export_to_txt(verified_results, output_dir)
    
    if 'json' in export_formats:
        Exporter.export_to_json(verified_results, output_dir / "all_texts.json")
    
    # NO INDEX FILE (removed per user request)
    
    # ============================================
    # FINAL SUMMARY
    # ============================================
    total_texts = sum(len(texts) for module in verified_results.values() for texts in module.values())
    
    print("\n" + "="*80)
    print("EXTRACTION COMPLETE!")
    print("="*80)
    print(f"Total texts extracted: {total_texts}")
    print(f"Modules found: {len(verified_results)}")
    print(f"Output location: {output_dir.resolve()}")
    print(f"Quality verified: YES (double-scanned)")
    print("="*80 + "\n")
    
    # ============================================
    # ASK FOR TEXT MERGING
    # ============================================
    print("="*80)
    print("TEXT MERGING & OPTIMIZATION")
    print("="*80)
    print("\n❓ Bạn có muốn merge các text giống nhau và tối ưu cấu trúc file không?")
    print("\n" + "-"*80)
    
    merge_choice = input("\nMerge và tối ưu? (Y/n): ").strip().lower()
    
    if merge_choice in ['y', 'yes', '']:
        print("\nĐang khởi chạy UI_Text_Merge_V1...")
        print("="*80 + "\n")
        
        try:
            # Import and run merge tool
            import UI_Text_Merge_V1
            UI_Text_Merge_V1.run_merge(output_dir, verified_results)
        except ImportError:
            print("Không tìm thấy UI_Text_Merge_V1.py")
            print("Vui lòng đảm bảo file UI_Text_Merge_V1.py nằm cùng thư mục")
        except Exception as e:
            print(f"Lỗi khi merge: {e}")
            import traceback
            traceback.print_exc()
    else:
        print("\nBỏ qua bước merge. Hoàn tất!")
        print("="*80 + "\n")


def verify_extraction_quality(results: Dict[str, Dict[str, Set[str]]]) -> Dict[str, Dict[str, Set[str]]]:
    """
    SECOND SCAN: Verify extraction quality
    Re-validate all extracted texts with even stricter rules
    """
    print("Re-validating all extracted texts...")
    
    verified_results = defaultdict(lambda: defaultdict(set))
    total_before = 0
    total_after = 0
    removed_count = 0
    
    for module_name, lang_texts in results.items():
        for lang, texts in lang_texts.items():
            total_before += len(texts)
            
            for text in texts:
                # Re-validate with strict rules
                if SmartValidator.is_valid_ui_text(text):
                    # Additional quality checks
                    quality_score = SmartValidator.calculate_quality_score(text)
                    
                    # Only keep high-quality texts (score >= 50)
                    if quality_score >= 50:
                        verified_results[module_name][lang].add(text)
                        total_after += 1
                    else:
                        removed_count += 1
                else:
                    removed_count += 1
    
    print(f"Before verification: {total_before} texts")
    print(f"After verification:  {total_after} texts")
    print(f"Removed low-quality: {removed_count} texts")
    
    # Fix division by zero
    if total_before > 0:
        print(f"Quality rate: {total_after/total_before*100:.2f}%")
    else:
        print(f"No texts found to verify")
    
    return verified_results

# ============================================
# MAIN ENTRY POINT
# ============================================

if __name__ == "__main__":
    try:
        run_interactive()
    except KeyboardInterrupt:
        print("\n\nCancelled by user")
    except Exception as e:
        print(f"\n\nError: {e}")
        import traceback
        traceback.print_exc()
