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

document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".filtro-btn"); 
  const productos = document.querySelectorAll(".tarjeta-producto");

  botones.forEach(boton => {
    boton.addEventListener("click", () => {
      const categoria = boton.getAttribute("data-categoria");

      botones.forEach(btn => btn.classList.remove("active")); 
      boton.classList.add("active");

      productos.forEach(producto => {
        const nombre = producto.querySelector("p").textContent.toLowerCase();

        if (categoria === "todos" || nombre.includes(categoria)) {
          producto.classList.remove("oculto");
          producto.classList.add("aparecer");
        } else {
          producto.classList.remove("aparecer");
          producto.classList.add("oculto");
        }
      });
    });
  });
});

/* boton de carrito */ 

