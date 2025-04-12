document.addEventListener('DOMContentLoaded', () => {
    // Mobile nav toggle
    const hamburger = document.querySelector('.hamburger-btn');
    const navLinks = document.querySelector('.navbar .links');
    const navClose = document.querySelector('.navbar .links .close-btn');
  
    hamburger.addEventListener('click', () => {
      navLinks.classList.add('show-menu');
    });
    navClose.addEventListener('click', () => {
      navLinks.classList.remove('show-menu');
    });
  
    // Popup (Request A Quote)
    const loginBtn = document.querySelector('.login-btn');
    const body = document.body;
    const overlay = document.querySelector('.blur-bg-overlay');
    const popupCloseBtns = document.querySelectorAll('.form-popup .close-btn');
  
    // Open popup
    loginBtn.addEventListener('click', () => {
      body.classList.add('show-popup');
    });
    // Close on overlay click
    overlay.addEventListener('click', () => {
      body.classList.remove('show-popup');
    });
    // Close on any close-btn inside popup
    popupCloseBtns.forEach(btn =>
      btn.addEventListener('click', () => {
        body.classList.remove('show-popup');
      })
    );
  });
  


