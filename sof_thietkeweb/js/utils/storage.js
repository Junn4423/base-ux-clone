/**
 * Storage Utility - Quản lý lưu trữ localStorage
 * Version: 1.0.0
 */

const Storage = {
  /**
   * Lấy giá trị từ localStorage
   * @param {string} key - Key cần lấy
   * @param {*} defaultValue - Giá trị mặc định nếu không tìm thấy
   * @returns {*} - Giá trị đã lưu hoặc giá trị mặc định
   */
  get(key, defaultValue = null) {
    try {
      const item = localStorage.getItem(key);
      if (item === null) return defaultValue;
      return JSON.parse(item);
    } catch (e) {
      console.warn(`Storage.get error for key "${key}":`, e);
      return defaultValue;
    }
  },

  /**
   * Lưu giá trị vào localStorage
   * @param {string} key - Key cần lưu
   * @param {*} value - Giá trị cần lưu
   * @returns {boolean} - Thành công hay thất bại
   */
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      console.warn(`Storage.set error for key "${key}":`, e);
      return false;
    }
  },

  /**
   * Xóa giá trị khỏi localStorage
   * @param {string} key - Key cần xóa
   */
  remove(key) {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.warn(`Storage.remove error for key "${key}":`, e);
    }
  },

  /**
   * Lấy ngôn ngữ đã lưu
   * @returns {string} - Mã ngôn ngữ
   */
  getLanguage() {
    return this.get('selectedLanguage', 'vi');
  },

  /**
   * Lưu ngôn ngữ
   * @param {string} lang - Mã ngôn ngữ
   */
  setLanguage(lang) {
    this.set('selectedLanguage', lang);
  }
};

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Storage;
}
