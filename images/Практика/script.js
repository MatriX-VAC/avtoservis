
console.log('Script loaded on:', document.title);
console.log('Menu button:', document.querySelector('.mobile-menu-btn'));
console.log('Navigation:', document.querySelector('.main-nav'));

// Модальное окно для записи
const modal = document.getElementById("appointmentModal");
const btn = document.getElementById("appointmentBtn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Анимация при скролле
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.benefit-item, .promo-item, .review-item');
    
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        
        if(position.top < window.innerHeight - 100) {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        }
    });
});



class MobileMenu {
    constructor() {
      this.menuButton = document.querySelector('.mobile-menu-btn');
      this.nav = document.querySelector('.main-nav');
      
      if (!this.menuButton || !this.nav) {
        console.error('Элементы меню не найдены!');
        return;
      }
      
      this.init();
    }
    
    init() {
      this.menuButton.addEventListener('click', () => this.toggleMenu());
      
      document.querySelectorAll('.nav-list a').forEach(link => {
        link.addEventListener('click', () => {
          if (window.innerWidth <= 768) this.closeMenu();
        });
      });
      
      window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && this.nav.classList.contains('active')) {
          this.closeMenu();
        }
      });
    }
    
    toggleMenu() {
      this.menuButton.classList.toggle('active');
      this.nav.classList.toggle('active');
    }
    
    closeMenu() {
      this.menuButton.classList.remove('active');
      this.nav.classList.remove('active');
    }
  }
  
  // Инициализация на всех страницах
  new MobileMenu();

// Фикс для iOS
document.addEventListener('touchmove', function(e) {
    if (window.innerWidth <= 768 && mainNav.classList.contains('active')) {
      e.preventDefault();
    }
  }, { passive: false });

  // Проверяем, является ли устройство мобильным
function isMobile() {
    return window.innerWidth <= 768;
  }
  
  // Обновляем меню при изменении размера окна
  window.addEventListener('resize', () => {
    if (!isMobile() && mainNav.classList.contains('active')) {
      menuToggle.classList.remove('active');
      mainNav.classList.remove('active');
    }
  });