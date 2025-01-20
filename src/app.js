import {Router} from "./router.js";

const homePage = () => {
    return `
         <h2>Welcome to the Social Network</h2>
         <p>This is the home page. Navigate using the links above</p>
    `;
};

const feedPage = () => {
    return `
    <h2>Feed</h2>
    <p>Here you can see posts from your friends</p>
`;
};

const profilePage = () => {
    return `
    <h2>Profile</h2>
    <p>Manage your account settings and view your activity here.</p>
`;
};

const loginPage = () => {
    return `
  <div id="login-widget" class="login-window">
  <img src="/assets/account.png"/>
    <form class="login-form">
      <div class="input-group">
        <div><img src="/assets/user.png"/></div>
        <input type="text" id="username" placeholder="Enter a username" required>
      </div>
      <div class="input-group">
        <div><img src="/assets/password.png"/></div>
        <input type="password" id="password" placeholder="Enter a password" required>
      </div>
      <div class="register-container">
         <p class="text">Don't have an account yet?</p>
         <a href="/register" class="link">Sign up now</a>
      </div>
      <button type="submit" class="login-button">Login</button>
    </form>
    <p id="error-message" style="color: red; display: none;">Неверный логин или пароль!</p>
  </div>
  `;
};

const notFoundPage = () => {
    return `
    <h2>404 - Page Not Found</h2>
    <p>The page you are looking for does not exist.</p>
`;
};

const routes = {
    '/': homePage,
    '/feed': feedPage,
    '/profile': profilePage,
    '/login': loginPage,
    '/404': notFoundPage,
};

new Router(routes);