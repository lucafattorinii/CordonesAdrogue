document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('h2');
    headers.forEach(header => {
        header.addEventListener('click', () => {
            header.classList.toggle('active');
            const iframe = header.nextElementSibling;
            if (iframe.style.display === 'block') {
                iframe.style.display = 'none';
            } else {
                iframe.style.display = 'block';
            }
        });
    });
});

// Añadir animaciones al cargar la página
window.addEventListener('load', () => {
    const elements = document.querySelectorAll('header, section, footer');
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });
});
