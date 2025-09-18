document.addEventListener('DOMContentLoaded', () => {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const carrossel = document.querySelector('.carrossel');

    const scrollAmount = 650; // Define o quanto o carrossel vai mover

    // Botão para mover o carrossel para a esquerda
    prevBtn.addEventListener('click', () => {
        carrossel.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    // Botão para mover o carrossel para a direita
    nextBtn.addEventListener('click', () => {
        carrossel.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
});