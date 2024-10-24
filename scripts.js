document.addEventListener('DOMContentLoaded', () => {
    const pdfUrls = {
        'pdf-canvas-4mm': 'https://tu-dominio.com/catalogos/Catalogo%204mm.pdf',
        'pdf-canvas-7mm': 'https://tu-dominio.com/catalogos/Catalogo%207mm%20y%20100m.pdf',
        'pdf-canvas-8mm': 'https://tu-dominio.com/catalogos/Catalogo%208mm%20y%2060m.pdf'
    };

    Object.keys(pdfUrls).forEach(canvasId => {
        const url = pdfUrls[canvasId];
        const canvas = document.getElementById(canvasId);
        const context = canvas.getContext('2d');

        pdfjsLib.getDocument(url).promise.then(pdf => {
            pdf.getPage(1).then(page => {
                const viewport = page.getViewport({ scale: 1.5 });
                canvas.height = viewport.height;
                canvas.width = viewport.width;

                const renderContext = {
                    canvasContext: context,
                    viewport: viewport
                };
                page.render(renderContext);
            });
        });
    });
});
