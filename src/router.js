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
        const currentPath = window.location.pathname;

        console.log(currentPath);
        const route = this.getRoute(currentPath);
        console.log(route);
        this.renderContent(route);
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

}