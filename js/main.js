document.addEventListener("DOMContentLoaded", () => {
  const aparecerItems = document.querySelectorAll(".aparecer");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible"); 
		observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2,
  });

  aparecerItems.forEach(el => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", function () {
    const elementos = document.querySelectorAll('.slide-in');

    elementos.forEach(el => {
    
      setTimeout(() => {
        el.classList.add('visible');
      }, 500);
    });
  });
