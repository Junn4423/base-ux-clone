/**
 * SOF SOF Cafe POS - Main JavaScript
 * Version: 1.0.0
 * Author: SOF - Solution Of Future
 */

// Import I18n module (loaded via script tag in HTML)
// Note: I18n module is defined in js/modules/i18n.js

(function() {
  'use strict';

  // ===========================
  // DOM Elements
  // ===========================
  const header = document.getElementById('header');
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  const navOverlay = document.getElementById('navOverlay');
  const scrollTopBtn = document.getElementById('scrollTop');
  const pricingToggle = document.getElementById('pricingToggle');

  // ===========================
  // Header Scroll Effect
  // ===========================
  function handleHeaderScroll() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  // ===========================
  // Mobile Menu Toggle
  // ===========================
  function toggleMenu() {
    if (!menuToggle || !navMenu) return;
    
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    if (navOverlay) navOverlay.classList.toggle('active');
    
    const isOpen = navMenu.classList.contains('active');
    document.body.style.overflow = isOpen ? 'hidden' : '';
    menuToggle.setAttribute('aria-expanded', isOpen);
  }

  function closeMenu() {
    if (menuToggle) menuToggle.classList.remove('active');
    if (navMenu) navMenu.classList.remove('active');
    if (navOverlay) navOverlay.classList.remove('active');
    document.body.style.overflow = '';
    if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
  }

  // ===========================
  // Scroll to Top
  // ===========================
  function handleScrollTopVisibility() {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  // ===========================
  // Smooth Scroll for Anchor Links
  // ===========================
  function handleSmoothScroll(e) {
    const href = this.getAttribute('href');
    
    if (href.startsWith('#') && href.length > 1) {
      e.preventDefault();
      const target = document.querySelector(href);
      
      if (target) {
        const headerHeight = header.offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        closeMenu();
      }
    }
  }

  // ===========================
  // Pricing Toggle (Monthly/Yearly)
  // ===========================
  function handlePricingToggle() {
    if (!pricingToggle) return;
    
    pricingToggle.classList.toggle('active');
    const isYearly = pricingToggle.classList.contains('active');
    
    // Update toggle labels
    const labels = pricingToggle.parentElement.querySelectorAll('span');
    labels[0].classList.toggle('active', !isYearly);
    labels[1].classList.toggle('active', isYearly);
    
    // Update prices
    const priceElements = document.querySelectorAll('.pricing-price[data-monthly]');
    priceElements.forEach(el => {
      const price = isYearly ? el.dataset.yearly : el.dataset.monthly;
      if (price === '') {
        el.innerHTML = 'Liên hệ';
      } else {
        const suffix = isYearly ? 'đ/tháng' : 'đ/tháng';
        el.innerHTML = `${price}<span>${suffix}</span>`;
      }
    });
  }

  // ===========================
  // Form Validation
  // ===========================
  function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    
    // Basic validation
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
      if (!field.value.trim()) {
        isValid = false;
        field.classList.add('error');
      } else {
        field.classList.remove('error');
      }
    });
    
    // Email validation (if provided)
    const emailField = form.querySelector('input[type="email"]');
    if (emailField && emailField.value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailField.value)) {
        isValid = false;
        emailField.classList.add('error');
      }
    }
    
    // Phone validation
    const phoneField = form.querySelector('input[type="tel"]');
    if (phoneField && phoneField.value) {
      const phoneRegex = /^[0-9]{10,11}$/;
      const cleanPhone = phoneField.value.replace(/\s/g, '');
      if (!phoneRegex.test(cleanPhone)) {
        isValid = false;
        phoneField.classList.add('error');
      }
    }
    
    if (!isValid) {
      showNotification('Vui lòng kiểm tra lại thông tin.', 'error');
      return;
    }
    
    // Build API payload
    const serviceSelect = form.querySelector('#service');
    const selectedOption = serviceSelect.options[serviceSelect.selectedIndex];
    
    const payload = {
      table: 'sl_lv0013',
      func: 'insert',
      maKH: 'CUS' + Date.now(), // Generate unique customer ID
      tenKH: formData.get('tenKH') || '',
      email: formData.get('email') || '',
      sdt: formData.get('sdt') || '',
      nguoiDaiDien: formData.get('nguoiDaiDien') || '',
      ngayLam: formData.get('ngayLam') || '',
      ngayKetThuc: formData.get('ngayKetThuc') || '',
      itemId: formData.get('service') || '',
    };
    // Show loading
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.innerHTML;
    submitButton.disabled = true;
    submitButton.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;"><circle cx="12" cy="12" r="10" opacity="0.25"/><path d="M12 2a10 10 0 0 1 10 10" opacity="0.75"/></svg> Đang gửi...';
    
    // Send to API
    fetch('http://192.168.1.90/erpdung-hao/services/erpv1/services.sof.vn/index.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'SOF-User-Token': 'SOF2025DEVELOPER'
      },
      body: JSON.stringify(payload)
    })
    .then(response => {
      
      // Clone response để đọc text
      return response.text().then(text => {
        // Thử parse JSON
        try {
          const data = JSON.parse(text);
          return { ok: response.ok, status: response.status, data: data };
        } catch (e) {
          console.error('❌ Response không phải JSON:', e);
          return { ok: response.ok, status: response.status, data: null, text: text };
        }
      });
    })
    .then(result => {
      
      if (result.ok) {
        showNotification('Cảm ơn bạn! Yêu cầu đã được gửi thành công. Chúng tôi sẽ liên hệ trong thời gian sớm nhất.', 'success');
        form.reset();
      } else {
        console.error('❌ API Error:', result);
        showNotification(`Có lỗi từ server (${result.status}). Vui lòng thử lại sau.`, 'error');
      }
    })
    .catch(error => {
      console.error('❌ Network Error:', error);
      showNotification('Có lỗi xảy ra. Vui lòng thử lại sau hoặc liên hệ hotline: 0933549469', 'error');
    })
    .finally(() => {
      submitButton.disabled = false;
      submitButton.innerHTML = originalButtonText;
    });
  }

  // ===========================
  // Notification System
  // ===========================
  function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
      existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
      <span>${message}</span>
      <button class="notification-close" aria-label="Close">&times;</button>
    `;
    
    // Add styles
    notification.style.cssText = `
      position: fixed;
      top: 100px;
      right: 20px;
      padding: 1rem 1.5rem;
      background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#17a2b8'};
      color: white;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      z-index: 9999;
      display: flex;
      align-items: center;
      gap: 1rem;
      animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Close button handler
    notification.querySelector('.notification-close').addEventListener('click', () => {
      notification.remove();
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
      if (notification.parentElement) {
        notification.style.animation = 'slideOut 0.3s ease forwards';
        setTimeout(() => notification.remove(), 300);
      }
    }, 5000);
  }

  // ===========================
  // Intersection Observer for Animations
  // ===========================
  function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.feature-card, .pricing-card, .testimonial-card, .about-content, .about-image');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(el => {
      el.style.opacity = '0';
      observer.observe(el);
    });
  }

  // ===========================
  // URL Parameter Handling
  // ===========================
  function handleURLParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const plan = urlParams.get('plan');
    
    if (plan) {
      const serviceSelect = document.getElementById('service');
      if (serviceSelect) {
        serviceSelect.value = plan;
      }
    }
  }

  // ===========================
  // Keyboard Navigation
  // ===========================
  function handleKeyboard(e) {
    // Close menu on Escape
    if (e.key === 'Escape') {
      closeMenu();
    }
  }

  // ===========================
  // Initialize
  // ===========================
  function init() {    
    // Event Listeners
    window.addEventListener('scroll', () => {
      handleHeaderScroll();
      handleScrollTopVisibility();
    });
    
    if (menuToggle) {
      menuToggle.addEventListener('click', toggleMenu);
    }
    
    if (navOverlay) {
      navOverlay.addEventListener('click', closeMenu);
    }
    
    if (scrollTopBtn) {
      scrollTopBtn.addEventListener('click', scrollToTop);
    }
    
    if (pricingToggle) {
      pricingToggle.addEventListener('click', handlePricingToggle);
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleSmoothScroll);
    });
    
    // Close menu when clicking nav links
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', closeMenu);
    });
    
    // Form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', handleFormSubmit);
    } else {
      console.error('KHÔNG tìm thấy form với id="contactForm"');
    }
    
    // Keyboard events
    document.addEventListener('keydown', handleKeyboard);
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize floating contact button
    initFloatingContact();
    
    // Initialize floating chatbot
    initFloatingChatbot();
    
    // Initialize language switcher
    initLanguageSwitcher();
    
    // Initialize image lightbox
    initImageLightbox();
    
    // Handle URL parameters
    handleURLParams();
    
    // Initial header state
    handleHeaderScroll();
    handleScrollTopVisibility();
    
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes slideIn {
        from {
          transform: translateX(100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
      
      @keyframes slideOut {
        from {
          transform: translateX(0);
          opacity: 1;
        }
        to {
          transform: translateX(100%);
          opacity: 0;
        }
      }
      
      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
      
      .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        line-height: 1;
      }
      
      .form-group input.error,
      .form-group textarea.error,
      .form-group select.error {
        border-color: #dc3545;
        box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.1);
      }
    `;
    document.head.appendChild(style);
  }

  // ===========================
  // Floating Contact Button
  // ===========================
  function initFloatingContact() {
    const floatingContact = document.getElementById('floatingContact');
    const floatingToggle = document.getElementById('floatingContactToggle');
    const floatingChatbot = document.getElementById('floatingChatbot');
    
    if (!floatingContact || !floatingToggle) return;
    
    // Toggle menu - dùng mousedown thay vì click để tránh xung đột
    floatingToggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      // Toggle contact menu
      floatingContact.classList.toggle('active');
      
      // Hide chatbot when contact is opened
      if (floatingContact.classList.contains('active') && floatingChatbot) {
        floatingChatbot.classList.add('hidden');
        floatingChatbot.classList.remove('active');
      } else if (floatingChatbot) {
        floatingChatbot.classList.remove('hidden');
      }
    });
    
    // Close when clicking outside
    document.addEventListener('click', function(e) {
      if (floatingContact && !floatingContact.contains(e.target)) {
        floatingContact.classList.remove('active');
        // Show chatbot again when contact is closed
        if (floatingChatbot && !floatingChatbot.classList.contains('active')) {
          floatingChatbot.classList.remove('hidden');
        }
      }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        floatingContact.classList.remove('active');
        if (floatingChatbot) {
          floatingChatbot.classList.remove('hidden');
        }
        closeMenu(); // Đóng cả mobile menu
      }
    });
  }

  // ===========================
  // FLOATING CHATBOT
  // ===========================
  function initFloatingChatbot() {
    const chatbot = document.getElementById('floatingChatbot');
    const chatbotToggle = document.getElementById('chatbotToggle');
    const chatbotMessages = document.getElementById('chatbotMessages');
    const chatbotInput = document.getElementById('chatbotInput');
    const chatbotSend = document.getElementById('chatbotSend');
    const floatingContact = document.getElementById('floatingContact');
    
    if (!chatbot || !chatbotToggle) return;
    
    let isFirstOpen = true;
    
    // Toggle chatbot
    chatbotToggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      // Toggle chatbot
      chatbot.classList.toggle('active');
      
      // Hide contact button when chatbot is opened
      if (chatbot.classList.contains('active') && floatingContact) {
        floatingContact.classList.add('hidden');
        floatingContact.classList.remove('active');
      } else if (floatingContact) {
        floatingContact.classList.remove('hidden');
      }
      
      // Show welcome message on first open
      if (isFirstOpen && chatbot.classList.contains('active')) {
        isFirstOpen = false;
        setTimeout(() => {
          addBotMessage('Xin chào! 👋 Tôi là AI Assistant của SOF Cafe POS. Bạn cần hỗ trợ gì?');
        }, 500);
      }
      
      // Focus input when opened
      if (chatbot.classList.contains('active') && chatbotInput) {
        setTimeout(() => chatbotInput.focus(), 300);
      }
    });
    
    // Close when clicking outside
    document.addEventListener('click', function(e) {
      if (chatbot && !chatbot.contains(e.target)) {
        chatbot.classList.remove('active');
        // Show contact button again when chatbot is closed
        if (floatingContact) {
          floatingContact.classList.remove('hidden');
        }
      }
    });
    
    // Send message
    function sendMessage() {
      const message = chatbotInput.value.trim();
      if (!message) return;
      
      // Add user message
      addUserMessage(message);
      chatbotInput.value = '';
      chatbotInput.style.height = 'auto'; // Reset textarea height
      
      // Show typing indicator
      showTypingIndicator();
      
      // Simulate AI response
      setTimeout(() => {
        hideTypingIndicator();
        addBotMessage('Xin chào, tôi là Chatbot AI của SOF Cafe POS, AI hiện tại đang được phát triển, bạn chờ nhé!! ☕🤖');
      }, 1500);
    }
    
    // Add bot message
    function addBotMessage(text) {
      const messageDiv = document.createElement('div');
      messageDiv.className = 'chat-message bot';
      messageDiv.innerHTML = `
        <div class="message-avatar">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"/>
            <circle cx="7.5" cy="14.5" r="1.5" fill="currentColor"/>
            <circle cx="16.5" cy="14.5" r="1.5" fill="currentColor"/>
          </svg>
        </div>
        <div class="message-content">${text}</div>
      `;
      chatbotMessages.appendChild(messageDiv);
      scrollToBottom();
    }
    
    // Add user message
    function addUserMessage(text) {
      const messageDiv = document.createElement('div');
      messageDiv.className = 'chat-message user';
      messageDiv.innerHTML = `
        <div class="message-avatar">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
        </div>
        <div class="message-content">${escapeHtml(text)}</div>
      `;
      chatbotMessages.appendChild(messageDiv);
      scrollToBottom();
    }
    
    // Show typing indicator
    function showTypingIndicator() {
      const typingDiv = document.createElement('div');
      typingDiv.className = 'chat-message bot';
      typingDiv.id = 'typingIndicator';
      typingDiv.innerHTML = `
        <div class="message-avatar">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"/>
          </svg>
        </div>
        <div class="typing-indicator">
          <span></span>
          <span></span>
          <span></span>
        </div>
      `;
      chatbotMessages.appendChild(typingDiv);
      scrollToBottom();
    }
    
    // Hide typing indicator
    function hideTypingIndicator() {
      const typingDiv = document.getElementById('typingIndicator');
      if (typingDiv) {
        typingDiv.remove();
      }
    }
    
    // Scroll to bottom of messages
    function scrollToBottom() {
      chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
    
    // Escape HTML to prevent XSS
    function escapeHtml(text) {
      const div = document.createElement('div');
      div.textContent = text;
      return div.innerHTML;
    }
    
    // Event listeners for sending message
    if (chatbotSend) {
      chatbotSend.addEventListener('click', sendMessage);
    }
    
    if (chatbotInput) {
      // Handle Enter key - send message, Shift+Enter or Ctrl+Enter for new line
      chatbotInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
          if (e.shiftKey || e.ctrlKey) {
            // Allow new line with Shift+Enter or Ctrl+Enter
            return;
          } else {
            // Send message with Enter only
            e.preventDefault();
            sendMessage();
          }
        }
      });
      
      // Auto-resize textarea
      chatbotInput.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = Math.min(this.scrollHeight, 120) + 'px';
      });
    }
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        chatbot.classList.remove('active');
      }
    });
  }

  // ===========================
  // Image Lightbox
  // ===========================
  function initImageLightbox() {
    // Create lightbox element
    const lightbox = document.createElement('div');
    lightbox.className = 'image-lightbox';
    lightbox.innerHTML = `
      <button class="image-lightbox-close" aria-label="Đóng">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
      <img src="" alt="">
    `;
    document.body.appendChild(lightbox);

    const lightboxImg = lightbox.querySelector('img');
    const closeBtn = lightbox.querySelector('.image-lightbox-close');

    // Get all clickable images (exclude logo and icons)
    const images = document.querySelectorAll(`
      .hero-image img,
      .about-image img,
      .feature-image img,
      section img:not(header img):not(footer img):not([width="150"]):not([width="50"])
    `);

    // Open lightbox on image click
    images.forEach(img => {
      if (img.closest('header') || img.closest('footer') || img.closest('.logo')) return;
      
      img.addEventListener('click', function(e) {
        e.preventDefault();
        lightboxImg.src = this.src;
        lightboxImg.alt = this.alt;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    // Close lightbox
    function closeLightbox() {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }

    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
      }
    });
  }

  // ===========================
  // Language Switcher
  // ===========================
  function initLanguageSwitcher() {
    const languageSwitchers = document.querySelectorAll('.language-switcher');
    
    if (!languageSwitchers.length) return;
    
    // Initialize I18n module if available
    if (typeof I18n !== 'undefined') {
      I18n.init().then(() => {
        console.log('✓ I18n module initialized');
      }).catch(err => {
        console.error('Failed to initialize I18n:', err);
      });
    }
    
    // Get saved language from localStorage
    const savedLang = localStorage.getItem('selectedLanguage') || 'vi';
    
    languageSwitchers.forEach(switcher => {
      const toggle = switcher.querySelector('.language-toggle');
      const dropdown = switcher.querySelector('.language-dropdown');
      const options = switcher.querySelectorAll('.language-option');
      const currentLangSpan = switcher.querySelector('.current-lang');
      
      // Set initial language
      updateActiveOption(switcher, savedLang);
      if (currentLangSpan) {
        const langCodes = {
          'vi': 'VI', 'en': 'EN', 'zh': 'ZH', 'ja': 'JA', 
          'ko': 'KO', 'th': 'TH', 'fr': 'FR', 'de': 'DE'
        };
        currentLangSpan.textContent = langCodes[savedLang] || 'VI';
      }
      
      // Toggle dropdown
      toggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        // Close other language switchers
        languageSwitchers.forEach(s => {
          if (s !== switcher) {
            s.classList.remove('active');
          }
        });
        
        switcher.classList.toggle('active');
        const isExpanded = switcher.classList.contains('active');
        toggle.setAttribute('aria-expanded', isExpanded);
      });
      
      // Handle language selection
      options.forEach(option => {
        option.addEventListener('click', async function(e) {
          e.preventDefault();
          e.stopPropagation();
          
          const lang = this.dataset.lang;
          
          // Use I18n module if available
          if (typeof I18n !== 'undefined') {
            const success = await I18n.setLanguage(lang);
            
            if (success) {
              // Show success notification
              const langNames = {
                'vi': 'Tiếng Việt', 'en': 'English', 'zh': '中文', 'ja': '日本語',
                'ko': '한국어', 'th': 'ไทย', 'fr': 'Français', 'de': 'Deutsch'
              };
              showNotification(`Đã chuyển sang ${langNames[lang] || lang}`, 'success');
            }
            // If not supported, I18n will show the unsupported message
          } else {
            // Fallback if I18n module is not available
            handleLanguageChangeFallback(lang, languageSwitchers);
          }
        });
      });
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.language-switcher')) {
        languageSwitchers.forEach(s => {
          s.classList.remove('active');
          const toggle = s.querySelector('.language-toggle');
          if (toggle) toggle.setAttribute('aria-expanded', 'false');
        });
      }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        languageSwitchers.forEach(s => {
          s.classList.remove('active');
          const toggle = s.querySelector('.language-toggle');
          if (toggle) toggle.setAttribute('aria-expanded', 'false');
        });
      }
    });
  }
  
  /**
   * Fallback xử lý thay đổi ngôn ngữ khi I18n module không khả dụng
   */
  function handleLanguageChangeFallback(lang, languageSwitchers) {
    const supportedLanguages = ['vi', 'en'];
    const langNames = {
      'vi': 'Tiếng Việt', 'en': 'English', 'zh': '中文', 'ja': '日本語',
      'ko': '한국어', 'th': 'ไทย', 'fr': 'Français', 'de': 'Deutsch'
    };
    const langCodes = {
      'vi': 'VI', 'en': 'EN', 'zh': 'ZH', 'ja': 'JA',
      'ko': 'KO', 'th': 'TH', 'fr': 'FR', 'de': 'DE'
    };
    
    // Kiểm tra ngôn ngữ có được hỗ trợ không
    if (!supportedLanguages.includes(lang)) {
      showUnsupportedLanguageMessage(lang);
      return;
    }
    
    // Update all language switchers
    languageSwitchers.forEach(s => {
      updateActiveOption(s, lang);
      const langSpan = s.querySelector('.current-lang');
      if (langSpan) {
        langSpan.textContent = langCodes[lang] || lang.toUpperCase();
      }
      s.classList.remove('active');
    });
    
    // Save to localStorage
    localStorage.setItem('selectedLanguage', lang);
    
    // Trigger language change event
    document.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
    
    // Show notification
    showNotification(`Đã chuyển sang ${langNames[lang] || lang}`, 'success');
    
    console.log('Language changed to:', lang);
  }
  
  /**
   * Hiển thị thông báo ngôn ngữ chưa được hỗ trợ
   */
  function showUnsupportedLanguageMessage(lang) {
    const langNames = {
      'vi': 'Tiếng Việt', 'en': 'English', 'zh': '中文', 'ja': '日本語',
      'ko': '한국어', 'th': 'ไทย', 'fr': 'Français', 'de': 'Deutsch'
    };
    
    const message = `
      <div style="margin-bottom: 8px;">
        <strong>🇻🇳 Hiện tại website chỉ hỗ trợ tiếng Anh và tiếng Việt, chúng tôi đang phát triển ngôn ngữ của bạn.</strong>
      </div>
      <div>
        <strong>🇺🇸 Currently the website only supports English and Vietnamese, we are developing your language.</strong>
      </div>
    `;
    
    // Remove existing notification
    const existingNotification = document.querySelector('.language-notification');
    if (existingNotification) {
      existingNotification.remove();
    }

    const notification = document.createElement('div');
    notification.className = 'language-notification notification notification-warning';
    notification.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 4px;">${message}</div>
      <button class="notification-close" aria-label="Close">&times;</button>
    `;

    notification.style.cssText = `
      position: fixed;
      top: 100px;
      right: 20px;
      left: 20px;
      max-width: 520px;
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
      line-height: 1.6;
      transition: opacity 2.5s ease;
    `;

    document.body.appendChild(notification);

    // Close button handler
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
    }, 2000);
  }
  
  function updateActiveOption(switcher, lang) {
    const options = switcher.querySelectorAll('.language-option');
    options.forEach(opt => {
      if (opt.dataset.lang === lang) {
        opt.classList.add('active');
      } else {
        opt.classList.remove('active');
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
