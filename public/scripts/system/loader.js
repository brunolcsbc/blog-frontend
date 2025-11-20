function showLoader() {
    // Evita criar múltiplos loaders
    if (document.getElementById('loader-overlay')) return;

    const loader = document.createElement('div');
    loader.id = 'loader-overlay';
    loader.className = 'position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-50';
    loader.style.zIndex = '1055'; // maior que modal padrão do Bootstrap

    loader.innerHTML = `
        <div class="spinner-border text-light" style="width: 3rem; height: 3rem;" role="status">
            <span class="visually-hidden">Carregando...</span>
        </div>
    `;

    document.body.appendChild(loader);
}

function hideLoader() {
    const loader = document.getElementById('loader-overlay');
    if (loader) {
        loader.remove();
    }
}