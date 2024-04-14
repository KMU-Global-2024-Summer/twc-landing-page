document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, { threshold: [0.1] });
  
    // Observe all sections
    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });
  });
  