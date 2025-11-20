function checkAuth() {
    const token = localStorage.getItem('token');
    if (!token) {
        redirectToLogin();
        return false;
    }

    // Decodificar o JWT para ver expiração (sem validar assinatura)
    const payload = parseJwt(token);

    if (!payload || !payload.exp) {
        redirectToLogin();
        return false;
    }

    const now = Math.floor(Date.now() / 1000);

    // Token expirado
    if (payload.exp < now) {
        redirectToLogin();
        return false;
    }

    return true;
}

// Função para decodificar o payload do token (não verifica assinatura)
function parseJwt(token) {
    try {
        const base64 = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
        return JSON.parse(atob(base64));
    } catch (e) {
        return null;
    }
}

function redirectToLogin() {
    window.location.href = '/auth/login';
}

checkAuth()
