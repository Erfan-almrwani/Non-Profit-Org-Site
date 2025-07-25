   // js/main.js
   document.addEventListener('DOMContentLoaded', function() {
   // Set current year in footer
   document.getElementById('year').textContent = new Date().getFullYear();
  // Theme Toggle
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  
  // Check for saved theme
  const currentTheme = localStorage.getItem('theme') || 'light';
  if (currentTheme === 'dark') {
    body.setAttribute('data-theme', 'dark');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }
  
  themeToggle.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'dark') {
      body.setAttribute('data-theme', 'light');
      themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
      localStorage.setItem('theme', 'light');
      showToast('تم تفعيل الوضع الفاتح', 'success');
    } else {
      body.setAttribute('data-theme', 'dark');
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
      localStorage.setItem('theme', 'dark');
      showToast('تم تفعيل الوضع الداكن', 'success');
    }

    // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navMenu = document.querySelector('.nav-menu');
  
  mobileMenuBtn.addEventListener('click', () => {
    const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
    mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
    navMenu.classList.toggle('active');
  });


  });
  
});