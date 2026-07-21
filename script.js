// Este evento asegura que el código corra hasta que la página cargue por completo
document.addEventListener("DOMContentLoaded", function() {
    
    // ========================================================
    // 1. ANIMACIÓN DE ENTRADA (FADE IN TEXT)
    // ========================================================
    const fadeElements = document.querySelectorAll('.fade-in-text');
    
    // Esta validación asegura que el código no falle si estamos en una página que no tiene estos textos
    if (fadeElements.length > 0) {
        // Agregamos la clase 'visible' con un pequeño retraso para el efecto cascada
        setTimeout(() => {
            if (fadeElements[0]) fadeElements[0].classList.add('visible');
        }, 100);

        setTimeout(() => {
            if (fadeElements[1]) fadeElements[1].classList.add('visible');
        }, 400); // El subtítulo aparece después

        setTimeout(() => {
            if (fadeElements[2]) fadeElements[2].classList.add('visible');
        }, 700); // El botón aparece al final
    }


    // ========================================================
    // 2. BOTONES EXPANDIBLES (ACORDEÓN DE PROYECTOS)
    // ========================================================
    const expandButtons = document.querySelectorAll('.btn-expand');

    // Le agregamos la función de clic a cada botón que encuentre en la página
    expandButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Encuentra la tarjeta exacta a la que pertenece el botón
            const card = button.closest('.project-card');
            
            // Le quita o le pone la clase 'active' para expandir/colapsar
            card.classList.toggle('active');
            
            // Cambia el texto y gira la flechita
            if(card.classList.contains('active')) {
                button.innerHTML = 'Ocultar Detalles <span class="arrow" style="transform: rotate(180deg);">▼</span>';
            } else {
                button.innerHTML = 'Ver Caso de Estudio <span class="arrow">▼</span>';
            }
        });
    });

});