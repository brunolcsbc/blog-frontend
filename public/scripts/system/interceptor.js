const api = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 10000,
});

// Interceptor de requisição
api.interceptors.request.use(
    (config) => {
        showLoader();
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
            config.headers['Content-Type'] = 'application/json';
        }
        return config;
    },
    (error) => {
        hideLoader();
        return Promise.reject(error);
    }
);

// Interceptor de resposta (opcional)
api.interceptors.response.use(
    (response) => {
        hideLoader();
        return response;
    },
    (error) => {
        hideLoader();
        if (error.code === 'ECONNABORTED') {
            console.error('⏰ Tempo limite da requisição atingido.');
        }

        if (error.response?.status === 401) {
            console.warn('⚠️ Token inválido ou expirado.');
            // Exemplo: redirecionar para login
            window.location.href = '/auth/login';
        }

        return Promise.reject(error);
    }
);

