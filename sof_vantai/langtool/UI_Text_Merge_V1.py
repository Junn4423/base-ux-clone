"""
═══════════════════════════════════════════════════════════════════════════════
    UI TEXT MERGE & OPTIMIZER v1.1.0 - ENHANCED
═══════════════════════════════════════════════════════════════════════════════

Author: Junn4423
Version: 1.1.0 ENHANCED
License: Commercial
Date: 2025-10-03
═══════════════════════════════════════════════════════════════════════════════
"""

import os
import json
import re
from pathlib import Path
from collections import defaultdict, Counter
from typing import Dict, Set, List, Tuple
from datetime import datetime
import hashlib
import unicodedata

# ============================================
# VIETNAMESE DIACRITICS REMOVER
# ============================================

class VietnameseHelper:
    """Helper để xử lý tiếng Việt"""
    
    # Bảng chuyển đổi dấu tiếng Việt
    VIETNAMESE_MAP = {
        'à': 'a', 'á': 'a', 'ả': 'a', 'ã': 'a', 'ạ': 'a',
        'ă': 'a', 'ằ': 'a', 'ắ': 'a', 'ẳ': 'a', 'ẵ': 'a', 'ặ': 'a',
        'â': 'a', 'ầ': 'a', 'ấ': 'a', 'ẩ': 'a', 'ẫ': 'a', 'ậ': 'a',
        'è': 'e', 'é': 'e', 'ẻ': 'e', 'ẽ': 'e', 'ẹ': 'e',
        'ê': 'e', 'ề': 'e', 'ế': 'e', 'ể': 'e', 'ễ': 'e', 'ệ': 'e',
        'ì': 'i', 'í': 'i', 'ỉ': 'i', 'ĩ': 'i', 'ị': 'i',
        'ò': 'o', 'ó': 'o', 'ỏ': 'o', 'õ': 'o', 'ọ': 'o',
        'ô': 'o', 'ồ': 'o', 'ố': 'o', 'ổ': 'o', 'ỗ': 'o', 'ộ': 'o',
        'ơ': 'o', 'ờ': 'o', 'ớ': 'o', 'ở': 'o', 'ỡ': 'o', 'ợ': 'o',
        'ù': 'u', 'ú': 'u', 'ủ': 'u', 'ũ': 'u', 'ụ': 'u',
        'ư': 'u', 'ừ': 'u', 'ứ': 'u', 'ử': 'u', 'ữ': 'u', 'ự': 'u',
        'ỳ': 'y', 'ý': 'y', 'ỷ': 'y', 'ỹ': 'y', 'ỵ': 'y',
        'đ': 'd',
        'À': 'A', 'Á': 'A', 'Ả': 'A', 'Ã': 'A', 'Ạ': 'A',
        'Ă': 'A', 'Ằ': 'A', 'Ắ': 'A', 'Ẳ': 'A', 'Ẵ': 'A', 'Ặ': 'A',
        'Â': 'A', 'Ầ': 'A', 'Ấ': 'A', 'Ẩ': 'A', 'Ẫ': 'A', 'Ậ': 'A',
        'È': 'E', 'É': 'E', 'Ẻ': 'E', 'Ẽ': 'E', 'Ẹ': 'E',
        'Ê': 'E', 'Ề': 'E', 'Ế': 'E', 'Ể': 'E', 'Ễ': 'E', 'Ệ': 'E',
        'Ì': 'I', 'Í': 'I', 'Ỉ': 'I', 'Ĩ': 'I', 'Ị': 'I',
        'Ò': 'O', 'Ó': 'O', 'Ỏ': 'O', 'Õ': 'O', 'Ọ': 'O',
        'Ô': 'O', 'Ồ': 'O', 'Ố': 'O', 'Ổ': 'O', 'Ỗ': 'O', 'Ộ': 'O',
        'Ơ': 'O', 'Ờ': 'O', 'Ớ': 'O', 'Ở': 'O', 'Ỡ': 'O', 'Ợ': 'O',
        'Ù': 'U', 'Ú': 'U', 'Ủ': 'U', 'Ũ': 'U', 'Ụ': 'U',
        'Ư': 'U', 'Ừ': 'U', 'Ứ': 'U', 'Ử': 'U', 'Ữ': 'U', 'Ự': 'U',
        'Ỳ': 'Y', 'Ý': 'Y', 'Ỷ': 'Y', 'Ỹ': 'Y', 'Ỵ': 'Y',
        'Đ': 'D',
    }
    
    @classmethod
    def remove_diacritics(cls, text: str) -> str:
        """
        Bỏ dấu tiếng Việt
        'bàn nhà hàng' -> 'ban nha hang'
        'café' -> 'cafe'
        """
        result = []
        for char in text:
            if char in cls.VIETNAMESE_MAP:
                result.append(cls.VIETNAMESE_MAP[char])
            else:
                result.append(char)
        return ''.join(result)
    
    @classmethod
    def to_snake_case(cls, text: str) -> str:
        """
        Chuyển text thành snake_case không dấu
        'Bàn nhà hàng' -> 'ban_nha_hang'
        '123 Đường ABC' -> '123_duong_abc'
        """
        # Bỏ dấu
        text = cls.remove_diacritics(text)
        
        # Chuyển về lowercase
        text = text.lower()
        
        # Thay thế ký tự đặc biệt và khoảng trắng bằng _
        text = re.sub(r'[^\w\s]', '_', text)
        text = re.sub(r'\s+', '_', text)
        text = re.sub(r'_+', '_', text)  # Remove multiple underscores
        
        # Xóa _ ở đầu và cuối
        text = text.strip('_')
        
        return text

# ============================================
# TEXT CATEGORIZER (AI-based)
# ============================================

class TextCategorizer:
    """Phân loại text thành các category hợp lý"""
    
    # Định nghĩa categories và keywords
    CATEGORIES = {
        'common': {
            'name': 'Common',
            'keywords': ['ok', 'yes', 'no', 'cancel', 'close', 'back', 'next', 'prev', 'previous', 'continue', 
                        'đồng ý', 'không', 'hủy', 'đóng', 'quay lại', 'tiếp', 'tiếp tục', 'trước', 'sau'],
            'subcategories': ['button', 'action', 'navigation']
        },
        'auth': {
            'name': 'Authentication',
            'keywords': ['login', 'logout', 'signin', 'signout', 'signup', 'register', 'password', 'username',
                        'đăng nhập', 'đăng xuất', 'đăng ký', 'tài khoản', 'mật khẩu', 'người dùng'],
            'subcategories': ['login', 'register', 'forgot_password', 'profile']
        },
        'form': {
            'name': 'Form',
            'keywords': ['name', 'email', 'phone', 'address', 'date', 'time', 'select', 'choose', 'input',
                        'tên', 'họ', 'địa chỉ', 'điện thoại', 'email', 'ngày', 'giờ', 'chọn', 'nhập'],
            'subcategories': ['label', 'placeholder', 'validation', 'helper']
        },
        'message': {
            'name': 'Messages',
            'keywords': ['success', 'error', 'warning', 'info', 'alert', 'notification',
                        'thành công', 'lỗi', 'cảnh báo', 'thông báo', 'chú ý'],
            'subcategories': ['success', 'error', 'warning', 'info']
        },
        'crud': {
            'name': 'CRUD Operations',
            'keywords': ['create', 'add', 'new', 'edit', 'update', 'delete', 'remove', 'save', 'submit',
                        'thêm', 'tạo', 'mới', 'sửa', 'cập nhật', 'xóa', 'lưu', 'gửi'],
            'subcategories': ['create', 'read', 'update', 'delete']
        },
        'list': {
            'name': 'List & Table',
            'keywords': ['list', 'table', 'grid', 'row', 'column', 'sort', 'filter', 'search', 'page', 'total',
                        'danh sách', 'bảng', 'hàng', 'cột', 'sắp xếp', 'lọc', 'tìm kiếm', 'trang', 'tổng'],
            'subcategories': ['header', 'action', 'filter', 'pagination']
        },
        'menu': {
            'name': 'Menu & Navigation',
            'keywords': ['home', 'dashboard', 'menu', 'settings', 'help', 'about', 'contact',
                        'trang chủ', 'bảng điều khiển', 'menu', 'cài đặt', 'trợ giúp', 'liên hệ'],
            'subcategories': ['main', 'user', 'admin']
        },
        'status': {
            'name': 'Status',
            'keywords': ['active', 'inactive', 'pending', 'processing', 'completed', 'failed', 'cancelled',
                        'đang hoạt động', 'ngừng', 'chờ', 'đang xử lý', 'hoàn thành', 'thất bại', 'hủy'],
            'subcategories': ['state', 'progress']
        },
        'time': {
            'name': 'Date & Time',
            'keywords': ['today', 'yesterday', 'tomorrow', 'now', 'date', 'time', 'hour', 'minute',
                        'hôm nay', 'hôm qua', 'ngày mai', 'bây giờ', 'ngày', 'giờ', 'phút', 'giây'],
            'subcategories': ['relative', 'absolute', 'format']
        },
        'business': {
            'name': 'Business',
            'keywords': ['product', 'service', 'price', 'payment', 'order', 'invoice', 'customer',
                        'sản phẩm', 'dịch vụ', 'giá', 'thanh toán', 'đơn hàng', 'hóa đơn', 'khách hàng'],
            'subcategories': ['product', 'order', 'customer', 'payment']
        },
        'report': {
            'name': 'Reports',
            'keywords': ['report', 'export', 'print', 'download', 'pdf', 'excel', 'statistics',
                        'báo cáo', 'xuất', 'in', 'tải xuống', 'thống kê'],
            'subcategories': ['export', 'print', 'statistics']
        },
    }
    
    @classmethod
    def categorize(cls, text: str) -> Tuple[str, str]:
        """
        Phân loại text vào category phù hợp
        Returns: (category, subcategory)
        """
        text_lower = text.lower()
        
        # Score mỗi category
        scores = defaultdict(lambda: {'score': 0, 'subcategory': 'general'})
        
        for category, config in cls.CATEGORIES.items():
            for keyword in config['keywords']:
                if keyword in text_lower:
                    scores[category]['score'] += 1
        
        # Tìm category có score cao nhất
        if scores:
            best_category = max(scores.items(), key=lambda x: x[1]['score'])
            if best_category[1]['score'] > 0:
                category = best_category[0]
                # Chọn subcategory phù hợp
                subcategory = cls._detect_subcategory(text_lower, category)
                return category, subcategory
        
        # Default
        return 'other', 'general'
    
    @classmethod
    def _detect_subcategory(cls, text_lower: str, category: str) -> str:
        """Phát hiện subcategory chi tiết hơn"""
        if category == 'common':
            if any(word in text_lower for word in ['ok', 'yes', 'no', 'đồng ý', 'không']):
                return 'button'
            elif any(word in text_lower for word in ['next', 'back', 'prev', 'tiếp', 'quay lại']):
                return 'navigation'
            else:
                return 'action'
        
        elif category == 'message':
            if any(word in text_lower for word in ['success', 'thành công', 'hoàn thành']):
                return 'success'
            elif any(word in text_lower for word in ['error', 'lỗi', 'thất bại']):
                return 'error'
            elif any(word in text_lower for word in ['warning', 'cảnh báo']):
                return 'warning'
            else:
                return 'info'
        
        elif category == 'crud':
            if any(word in text_lower for word in ['add', 'create', 'new', 'thêm', 'tạo']):
                return 'create'
            elif any(word in text_lower for word in ['edit', 'update', 'sửa', 'cập nhật']):
                return 'update'
            elif any(word in text_lower for word in ['delete', 'remove', 'xóa']):
                return 'delete'
            else:
                return 'read'
        
        elif category == 'form':
            if any(word in text_lower for word in ['placeholder', 'nhập', 'enter']):
                return 'placeholder'
            elif any(word in text_lower for word in ['required', 'invalid', 'bắt buộc', 'không hợp lệ']):
                return 'validation'
            else:
                return 'label'
        
        elif category == 'list':
            if any(word in text_lower for word in ['filter', 'search', 'lọc', 'tìm']):
                return 'filter'
            elif any(word in text_lower for word in ['page', 'total', 'trang', 'tổng']):
                return 'pagination'
            elif any(word in text_lower for word in ['edit', 'delete', 'view', 'sửa', 'xóa', 'xem']):
                return 'action'
            else:
                return 'header'
        
        # Default subcategory
        return 'general'

# ============================================
# TEXT MERGER
# ============================================

class TextMerger:
    """Merge text trùng lặp và tạo key mapping"""
    
    def __init__(self):
        self.merged_texts = {}  # {lang: {category: {subcategory: {key: text}}}}
        self.duplicates_removed = 0
        self.total_texts = 0
        self.key_counter = defaultdict(int)
    
    def merge(self, results: Dict[str, Dict[str, Set[str]]]) -> Dict[str, Dict]:
        """
        Merge all texts and organize by category
        results: {module_name: {lang: set_of_texts}}
        returns: {lang: {category: {subcategory: {key: text}}}}
        """
        print("\n" + "="*80)
        print("MERGING & ORGANIZING TEXTS")
        print("="*80 + "\n")
        
        # Collect all unique texts per language
        lang_texts = defaultdict(set)
        for module_name, lang_dict in results.items():
            for lang, texts in lang_dict.items():
                lang_texts[lang].update(texts)
                self.total_texts += len(texts)
        
        # Process each language
        for lang, texts in lang_texts.items():
            print(f"Processing {lang}: {len(texts)} texts")
            self.merged_texts[lang] = defaultdict(lambda: defaultdict(dict))
            
            for text in sorted(texts):
                # Categorize
                category, subcategory = TextCategorizer.categorize(text)
                
                # Generate key
                key = self._generate_key(text, category, subcategory)
                
                # Store
                self.merged_texts[lang][category][subcategory][key] = text
        
        # Calculate duplicates removed
        total_merged = sum(
            len(subcat_dict)
            for lang_dict in self.merged_texts.values()
            for cat_dict in lang_dict.values()
            for subcat_dict in cat_dict.values()
        )
        self.duplicates_removed = self.total_texts - total_merged
        
        print(f"\nOriginal texts: {self.total_texts}")
        print(f"After merge: {total_merged}")
        print(f"Duplicates removed: {self.duplicates_removed}")
        
        return self.merged_texts
    
    def _generate_key(self, text: str, category: str, subcategory: str) -> str:
        """
        Generate unique key for text WITHOUT diacritics
        Xử lý trùng lặp khi bỏ dấu (bán/bàn -> ban_1, ban_2)
        """
        # Bỏ dấu tiếng Việt và chuyển về snake_case
        clean_text = VietnameseHelper.to_snake_case(text)
        
        # Lấy tối đa 3 từ đầu tiên
        words = clean_text.split('_')[:3]
        
        if not words or not words[0]:
            words = ['text']
        
        # Create base key (không dấu)
        base_key = '_'.join(words)
        
        # Tạo full key để check duplicate trong CÙNG category + subcategory
        scope_key = f"{category}.{subcategory}.{base_key}"
        
        # Kiểm tra trùng lặp
        if scope_key in self.key_counter:
            # Có trùng rồi -> thêm suffix số
            self.key_counter[scope_key] += 1
            final_key = f"{base_key}_{self.key_counter[scope_key]}"
        else:
            # Lần đầu tiên
            self.key_counter[scope_key] = 0
            final_key = base_key
        
        return final_key

# ============================================
# EXPORTER
# ============================================

class MergeExporter:
    """Export merged texts to various formats"""
    
    @staticmethod
    def export_json_nested(merged_texts: Dict, output_dir: Path):
        """Export as nested JSON (for easy import)"""
        print("\n" + "="*80)
        print("EXPORTING MERGED TEXTS")
        print("="*80 + "\n")
        
        output_dir = output_dir / "merged"
        output_dir.mkdir(parents=True, exist_ok=True)
        
        # Export per language
        for lang, categories in merged_texts.items():
            filepath = output_dir / f"{lang}.json"
            
            # Add metadata
            output = {
                'metadata': {
                    'language': lang,
                    'version': '1.1.0',
                    'generated_at': datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
                    'total_texts': sum(
                        len(subcat_dict)
                        for cat_dict in categories.values()
                        for subcat_dict in cat_dict.values()
                    ),
                    'features': [
                        'No Vietnamese diacritics in keys',
                        'Smart duplicate handling with suffix',
                        'Snake_case normalization',
                        'Code-friendly key format',
                    ],
                    'note': 'All keys are without diacritics. Example: "bàn nhà hàng" -> "ban_nha_hang"',
                },
                'texts': dict(categories)
            }
            
            with open(filepath, 'w', encoding='utf-8') as f:
                json.dump(output, f, ensure_ascii=False, indent=2)
            
            print(f" {filepath.name} - {output['metadata']['total_texts']} texts")
    
    @staticmethod
    def export_flat_json(merged_texts: Dict, output_dir: Path):
        """Export as flat JSON (key: text)"""
        output_dir = output_dir / "merged"
        output_dir.mkdir(parents=True, exist_ok=True)
        
        for lang, categories in merged_texts.items():
            filepath = output_dir / f"{lang}_flat.json"
            
            # Flatten structure
            flat = {}
            for category, subcategories in categories.items():
                for subcategory, texts in subcategories.items():
                    for key, text in texts.items():
                        full_key = f"{category}.{subcategory}.{key}"
                        flat[full_key] = text
            
            with open(filepath, 'w', encoding='utf-8') as f:
                json.dump(flat, f, ensure_ascii=False, indent=2)
            
            print(f" {filepath.name} - {len(flat)} texts (flat)")
    
    @staticmethod
    def export_typescript_constants(merged_texts: Dict, output_dir: Path):
        """Export as TypeScript constants"""
        output_dir = output_dir / "merged"
        output_dir.mkdir(parents=True, exist_ok=True)
        
        for lang, categories in merged_texts.items():
            filepath = output_dir / f"{lang}.ts"
            
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write("// Auto-generated language constants\n")
                f.write(f"// Language: {lang}\n")
                f.write(f"// Generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n")
                f.write("// NOTE: All keys are without Vietnamese diacritics\n")
                f.write("// Example: 'bàn nhà hàng' -> ban_nha_hang\n\n")
                
                f.write(f"export const {lang.upper()} = {{\n")
                
                for category, subcategories in sorted(categories.items()):
                    f.write(f"  {category}: {{\n")
                    
                    for subcategory, texts in sorted(subcategories.items()):
                        f.write(f"    {subcategory}: {{\n")
                        
                        for key, text in sorted(texts.items()):
                            # Escape quotes
                            escaped = text.replace("'", "\\'").replace('"', '\\"')
                            f.write(f"      {key}: '{escaped}',\n")
                        
                        f.write(f"    }},\n")
                    
                    f.write(f"  }},\n")
                
                f.write("};\n")
            
            print(f" {filepath.name} - TypeScript constants")
    
    @staticmethod
    def export_summary(merged_texts: Dict, output_dir: Path, stats: Dict):
        """Export summary report"""
        output_dir = output_dir / "merged"
        filepath = output_dir / "SUMMARY.txt"
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write("="*80 + "\n")
            f.write("TEXT MERGE SUMMARY v1.1.0\n")
            f.write("="*80 + "\n")
            f.write(f"Generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n")
            f.write("="*80 + "\n\n")
            
            f.write("STATISTICS\n")
            f.write("-"*80 + "\n")
            f.write(f"Original texts:      {stats['total_texts']}\n")
            f.write(f"After merge:         {stats['merged_texts']}\n")
            f.write(f"Duplicates removed:  {stats['duplicates_removed']}\n")
            f.write(f"Reduction rate:      {stats['reduction_rate']:.1f}%\n")
            f.write("\n")
            
            f.write("BY LANGUAGE\n")
            f.write("-"*80 + "\n")
            for lang, categories in sorted(merged_texts.items()):
                total = sum(
                    len(texts)
                    for subcategories in categories.values()
                    for texts in subcategories.values()
                )
                f.write(f"{lang:10} {total:6} texts\n")
            f.write("\n")
            
            f.write("BY CATEGORY\n")
            f.write("-"*80 + "\n")
            
            for lang, categories in sorted(merged_texts.items()):
                f.write(f"\n{lang.upper()}:\n")
                for category, subcategories in sorted(categories.items()):
                    total = sum(len(texts) for texts in subcategories.values())
                    f.write(f"  {category:20} {total:6} texts\n")
                    
                    for subcategory, texts in sorted(subcategories.items()):
                        f.write(f"    └─ {subcategory:15} {len(texts):6} texts\n")
        
        print(f" {filepath.name} - Summary report")

# ============================================
# MAIN MERGE FUNCTION
# ============================================

def run_merge(output_dir: Path, results: Dict[str, Dict[str, Set[str]]]):
    """Main merge function called from extractor"""
    print("\n" + "="*80)
    print("UI TEXT MERGE & OPTIMIZER v1.1.0 - ENHANCED")
    print("="*80 + "\n")
    
    # Step 1: Merge texts
    merger = TextMerger()
    merged_texts = merger.merge(results)
    
    # Step 2: Export to different formats
    MergeExporter.export_json_nested(merged_texts, output_dir)
    MergeExporter.export_flat_json(merged_texts, output_dir)
    MergeExporter.export_typescript_constants(merged_texts, output_dir)
    
    # Step 3: Export summary
    total_merged = sum(
        len(texts)
        for lang_dict in merged_texts.values()
        for cat_dict in lang_dict.values()
        for texts in cat_dict.values()
    )
    
    stats = {
        'total_texts': merger.total_texts,
        'merged_texts': total_merged,
        'duplicates_removed': merger.duplicates_removed,
        'reduction_rate': (merger.duplicates_removed / merger.total_texts * 100) if merger.total_texts > 0 else 0,
    }
    
    MergeExporter.export_summary(merged_texts, output_dir, stats)
    
    # Final report
    print("\n" + "="*80)
    print("MERGE COMPLETE!")
    print("="*80)
    print(f"Original texts:     {stats['total_texts']}")
    print(f"After merge:        {stats['merged_texts']}")
    print(f"Duplicates removed: {stats['duplicates_removed']}")
    print(f"Reduction rate:     {stats['reduction_rate']:.1f}%")
    print(f"Output location:    {output_dir / 'merged'}")
    print("="*80 + "\n")

    print("Exported formats:")
    print("JSON nested (easy to navigate)")
    print("JSON flat (key: text)")
    print("TypeScript constants (.ts)")
    print("Summary report (SUMMARY.txt)")
    print("\n" + "="*80 + "\n")

# ============================================
# STANDALONE USAGE
# ============================================

if __name__ == "__main__":
    print("⚠️  This tool should be called from UI_Text_Extractor_V4")
    print("💡 Or you can manually import and use run_merge() function")
