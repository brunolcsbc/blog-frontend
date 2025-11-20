document.getElementById('formLogout').addEventListener('submit', function(event) {
    try {
        api.post('/auth/logout');
        localStorage.removeItem('token')
        window.location.href = '/auth/login';
    } catch(err) {
        console.log(err);
        alert("Houve um erro inesperado no sistema");
    }
});
