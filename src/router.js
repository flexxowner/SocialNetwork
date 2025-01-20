export class Router {
    constructor(routes) {
        this.routes = routes;
        window.onpopstate = () => this.render();
        this.init();
    }

    init() {
        document.addEventListener('click', (e) => {
            if (e.target.tagName === 'A' && e.target.dataset.link !== undefined) {
                e.preventDefault();
                this.navigate(e.target.href);
            }
        });
        this.render();
    }

    navigate(url) {
        history.pushState(null, null, url);
        this.render();
    }

    render() {
        if (!this.isAuthenticated()) {
            this.renderLogin();
            return;
        }

        const currentPath = window.location.pathname;
        const route = this.getRoute(currentPath);
        this.renderContent(route);
    }

// Проверка авторизации
    isAuthenticated() {
        return !!localStorage.getItem("authToken");
    }

// Получение маршрута
    getRoute(path) {
        return this.routes[path] || this.routes['/404'];
    }

// Рендеринг контента
    renderContent(route) {
        document.getElementById('header').style.display = 'block';
        document.getElementById('app').innerHTML = route();
    }

// Рендеринг страницы логина
    renderLogin() {
        const loginContainer = document.getElementById('login-container');
        const header = document.getElementById('header');

        header.style.display = 'none';
        loginContainer.innerHTML = this.routes['/login']();
        loginContainer.style.display = 'flex';
    }

}