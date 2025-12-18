/**
 * i18n Module - Quản lý đa ngôn ngữ cho website
 * Version: 1.1.0
 * Supported Languages: Vietnamese (vi), English (en)
 * 
 * Cách hoạt động: 
 * - Tải cả 2 file ngôn ngữ (vi và en)
 * - Tạo mapping giữa text VI <-> EN theo key
 * - Khi đổi ngôn ngữ, tìm và thay thế text trên trang
 */

const I18n = (function() {
  'use strict';

  // ===========================
  // Configuration
  // ===========================
  const CONFIG = {
    defaultLanguage: 'vi',
    supportedLanguages: ['vi', 'en'],
    languageNames: {
      'vi': { name: 'Tiếng Việt', code: 'VI', flag: '🇻🇳' },
      'en': { name: 'English', code: 'EN', flag: '🇺🇸' },
      'zh': { name: '中文', code: 'ZH', flag: '🇨🇳' },
      'ja': { name: '日本語', code: 'JA', flag: '🇯🇵' },
      'ko': { name: '한국어', code: 'KO', flag: '🇰🇷' },
      'th': { name: 'ไทย', code: 'TH', flag: '🇹🇭' },
      'fr': { name: 'Français', code: 'FR', flag: '🇫🇷' },
      'de': { name: 'Deutsch', code: 'DE', flag: '🇩🇪' }
    },
    storagePath: {
      'vi': 'i18n/VN/vi_flat.json',
      'en': 'i18n/EN/en_flat.json'
    },
    unsupportedMessage: {
      vi: 'Hiện tại website chỉ hỗ trợ tiếng Anh và tiếng Việt, chúng tôi đang phát triển ngôn ngữ của bạn.',
      en: 'Currently the website only supports English and Vietnamese, we are developing your language.'
    }
  };

  // ===========================
  // State
  // ===========================
  let currentLanguage = CONFIG.defaultLanguage;
  let allTranslations = { vi: {}, en: {} }; // Lưu cả 2 ngôn ngữ
  let textMappings = {}; // Mapping từ text này sang text kia
  let isLoaded = false;

  // ===========================
  // Storage Helper
  // ===========================
  const Storage = {
    get(key, defaultValue = null) {
      try {
        const item = localStorage.getItem(key);
        if (item === null) return defaultValue;
        return JSON.parse(item);
      } catch (e) {
        return defaultValue;
      }
    },
    set(key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
      } catch (e) {
        return false;
      }
    }
  };

  // ===========================
  // Private Methods
  // ===========================

  /**
   * Kiểm tra ngôn ngữ có được hỗ trợ không
   */
  function isSupported(lang) {
    return CONFIG.supportedLanguages.includes(lang);
  }

  /**
   * Hiển thị thông báo ngôn ngữ chưa được hỗ trợ
   */
  function showUnsupportedMessage(lang) {
    const message = `
      <div style="margin-bottom: 8px;"><strong>🇻🇳 ${CONFIG.unsupportedMessage.vi}</strong></div>
      <div><strong>🇺🇸 ${CONFIG.unsupportedMessage.en}</strong></div>
    `;
    
    const existingNotification = document.querySelector('.i18n-notification');
    if (existingNotification) {
      existingNotification.remove();
    }

    const notification = document.createElement('div');
    notification.className = 'i18n-notification notification notification-warning';
    notification.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 4px;">${message}</div>
      <button class="notification-close" aria-label="Close">&times;</button>
    `;

    notification.style.cssText = `
      position: fixed;
      top: 100px;
      right: 20px;
      left: 20px;
      max-width: 500px;
      margin: 0 auto;
      padding: 1rem 1.5rem;
      background: linear-gradient(135deg, #f39c12, #e67e22);
      color: white;
      border-radius: 12px;
      box-shadow: 0 8px 24px rgba(243, 156, 18, 0.3);
      z-index: 9999;
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      animation: slideIn 0.3s ease;
      font-size: 0.9rem;
      line-height: 1.5;
      transition: opacity 0.5s ease;
    `;

    document.body.appendChild(notification);

    notification.querySelector('.notification-close').addEventListener('click', () => {
      notification.style.opacity = '0';
      setTimeout(() => notification.remove(), 500);
    });

    // Auto fade out after 4 seconds
    setTimeout(() => {
      if (notification.parentElement) {
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 500);
      }
    }, 4000);
  }

  /**
   * Tải tất cả file ngôn ngữ
   */
  async function loadAllLanguageFiles() {
    console.log('Loading language files...');
    try {
      const [viResponse, enResponse] = await Promise.all([
        fetch(CONFIG.storagePath['vi']),
        fetch(CONFIG.storagePath['en'])
      ]);

      if (viResponse.ok) {
        allTranslations.vi = await viResponse.json();
        console.log(`✓ VI loaded: ${Object.keys(allTranslations.vi).length} keys`);
      } else {
        console.error('Failed to load VI:', viResponse.status);
      }
      
      if (enResponse.ok) {
        allTranslations.en = await enResponse.json();
        console.log(`✓ EN loaded: ${Object.keys(allTranslations.en).length} keys`);
      } else {
        console.error('Failed to load EN:', enResponse.status);
      }

      // Tạo mapping giữa VI và EN theo key
      buildTextMappings();
      isLoaded = true;
      console.log(`✓ Languages loaded: VI (${Object.keys(allTranslations.vi).length} keys), EN (${Object.keys(allTranslations.en).length} keys)`);
    } catch (error) {
      console.error('Failed to load language files:', error);
    }
  }

  /**
   * Tạo mapping giữa text VI và EN
   */
  function buildTextMappings() {
    textMappings = { viToEn: {}, enToVi: {} };
    
    // Duyệt qua tất cả các key trong file VI
    Object.keys(allTranslations.vi).forEach(key => {
      const viText = allTranslations.vi[key];
      const enText = allTranslations.en[key];
      
      if (viText && enText && viText !== enText) {
        // Chỉ map những text có giá trị và khác nhau
        textMappings.viToEn[viText] = enText;
        textMappings.enToVi[enText] = viText;
      }
    });

    console.log(`✓ Text mappings created: ${Object.keys(textMappings.viToEn).length} pairs`);
  }

  /**
   * Cập nhật text trên toàn bộ trang
   */
  function updatePageText(fromLang, toLang) {
    const mapping = fromLang === 'vi' ? textMappings.viToEn : textMappings.enToVi;
    
    if (!mapping || Object.keys(mapping).length === 0) {
      console.warn('No text mappings available');
      return;
    }

    // Tạo danh sách các text cần thay thế, sắp xếp theo độ dài giảm dần
    // để tránh thay thế text ngắn trong text dài
    const sortedTexts = Object.keys(mapping).sort((a, b) => b.length - a.length);

    // Cập nhật HTML lang attribute
    document.documentElement.lang = toLang;

    // Duyệt qua tất cả text nodes
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: function(node) {
          // Bỏ qua script, style, và các node rỗng
          const parent = node.parentElement;
          if (!parent) return NodeFilter.FILTER_REJECT;
          
          const tagName = parent.tagName.toLowerCase();
          if (['script', 'style', 'noscript', 'iframe'].includes(tagName)) {
            return NodeFilter.FILTER_REJECT;
          }
          
          if (node.textContent.trim().length === 0) {
            return NodeFilter.FILTER_REJECT;
          }
          
          return NodeFilter.FILTER_ACCEPT;
        }
      }
    );

    const textNodes = [];
    let node;
    while (node = walker.nextNode()) {
      textNodes.push(node);
    }

    // Thay thế text trong các text nodes
    let replacedCount = 0;
    textNodes.forEach(textNode => {
      let text = textNode.textContent;
      let hasChanged = false;

      sortedTexts.forEach(fromText => {
        if (text.includes(fromText)) {
          text = text.split(fromText).join(mapping[fromText]);
          hasChanged = true;
        }
      });

      if (hasChanged) {
        textNode.textContent = text;
        replacedCount++;
      }
    });

    // Cập nhật các attribute: title, placeholder, aria-label, alt
    const elementsWithAttrs = document.querySelectorAll('[title], [placeholder], [aria-label], [alt]');
    elementsWithAttrs.forEach(el => {
      ['title', 'placeholder', 'aria-label', 'alt'].forEach(attr => {
        const value = el.getAttribute(attr);
        if (value) {
          sortedTexts.forEach(fromText => {
            if (value.includes(fromText)) {
              el.setAttribute(attr, value.split(fromText).join(mapping[fromText]));
            }
          });
        }
      });
    });

    // Cập nhật meta tags
    const metaTags = document.querySelectorAll('meta[name="description"], meta[name="keywords"], meta[property^="og:"]');
    metaTags.forEach(meta => {
      const content = meta.getAttribute('content');
      if (content) {
        sortedTexts.forEach(fromText => {
          if (content.includes(fromText)) {
            meta.setAttribute('content', content.split(fromText).join(mapping[fromText]));
          }
        });
      }
    });

    console.log(`✓ Text replaced: ${replacedCount} text nodes updated`);
  }

  /**
   * Cập nhật tất cả các phần tử có data-i18n attribute (backward compatible)
   */
  function updateAllElements() {
    const translations = allTranslations[currentLanguage] || {};
    
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      const translation = translations[key];
      if (translation) {
        el.textContent = translation;
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const translation = translations[key];
      if (translation) {
        el.placeholder = translation;
      }
    });
  }

  /**
   * Cập nhật UI của language switcher
   * @param {string} lang - Mã ngôn ngữ
   */
  function updateLanguageSwitcherUI(lang) {
    const languageSwitchers = document.querySelectorAll('.language-switcher');
    
    languageSwitchers.forEach(switcher => {
      // Update current language display
      const currentLangSpan = switcher.querySelector('.current-lang');
      if (currentLangSpan) {
        currentLangSpan.textContent = CONFIG.languageNames[lang]?.code || lang.toUpperCase();
      }

      // Update active option
      const options = switcher.querySelectorAll('.language-option');
      options.forEach(opt => {
        if (opt.dataset.lang === lang) {
          opt.classList.add('active');
        } else {
          opt.classList.remove('active');
        }
      });

      // Close dropdown
      switcher.classList.remove('active');
      const toggle = switcher.querySelector('.language-toggle');
      if (toggle) {
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /**
   * Lấy bản dịch theo key
   */
  function getTranslation(key, params = {}) {
    let text = allTranslations[currentLanguage]?.[key];
    
    if (!text) return null;

    if (params && Object.keys(params).length > 0) {
      Object.keys(params).forEach(param => {
        const regex = new RegExp(`{{${param}}}`, 'g');
        text = text.replace(regex, params[param]);
      });
    }

    return text;
  }

  // ===========================
  // Public API
  // ===========================
  return {
    /**
     * Khởi tạo module i18n
     */
    async init(options = {}) {
      // Tải tất cả file ngôn ngữ
      await loadAllLanguageFiles();
      
      // Lấy ngôn ngữ đã lưu hoặc từ browser
      const savedLang = Storage.get('selectedLanguage');
      const browserLang = navigator.language?.split('-')[0] || CONFIG.defaultLanguage;
      currentLanguage = savedLang || (isSupported(browserLang) ? browserLang : CONFIG.defaultLanguage);
      
      // Cập nhật UI
      updateLanguageSwitcherUI(currentLanguage);
      
      // Nếu ngôn ngữ hiện tại không phải mặc định, cập nhật text
      if (currentLanguage !== CONFIG.defaultLanguage) {
        updatePageText(CONFIG.defaultLanguage, currentLanguage);
      }
      
      // Lưu ngôn ngữ hiện tại
      Storage.set('selectedLanguage', currentLanguage);
      
      console.log(`✓ I18n initialized with language: ${currentLanguage}`);
      return currentLanguage;
    },

    /**
     * Chuyển đổi ngôn ngữ
     */
    async setLanguage(lang) {
      // Kiểm tra ngôn ngữ có được hỗ trợ không
      if (!isSupported(lang)) {
        showUnsupportedMessage(lang);
        return false;
      }

      if (lang === currentLanguage) {
        console.log(`Language "${lang}" is already active.`);
        return true;
      }

      // Đảm bảo đã load files ngôn ngữ
      if (!isLoaded) {
        await loadAllLanguageFiles();
      }

      const previousLang = currentLanguage;
      currentLanguage = lang;
      
      // Cập nhật text trên trang
      updatePageText(previousLang, lang);
      
      // Cập nhật UI language switcher
      updateLanguageSwitcherUI(lang);
      
      // Lưu vào storage
      Storage.set('selectedLanguage', lang);
      
      // Dispatch event
      document.dispatchEvent(new CustomEvent('languageChanged', { 
        detail: { 
          language: lang,
          languageName: CONFIG.languageNames[lang]?.name || lang
        } 
      }));

      return true;
    },

    /**
     * Lấy ngôn ngữ hiện tại
     */
    getCurrentLanguage() {
      return currentLanguage;
    },

    /**
     * Lấy bản dịch
     */
    t(key, params = {}) {
      return getTranslation(key, params) || key;
    },

    /**
     * Kiểm tra ngôn ngữ có được hỗ trợ không
     */
    isSupported(lang) {
      return isSupported(lang);
    },

    /**
     * Lấy danh sách ngôn ngữ được hỗ trợ
     */
    getSupportedLanguages() {
      return [...CONFIG.supportedLanguages];
    },

    /**
     * Lấy thông tin của tất cả ngôn ngữ
     */
    getLanguageInfo() {
      return { ...CONFIG.languageNames };
    },

    /**
     * Cập nhật tất cả các phần tử i18n
     */
    updateElements() {
      updateAllElements();
    },

    /**
     * Lấy tất cả translations
     */
    getTranslations() {
      return allTranslations;
    }
  };

})();

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = I18n;
}
