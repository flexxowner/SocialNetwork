import {Router} from "./router.js";
import {RightMenu} from "./right-menu.js";
import {HomePage} from "./home.js";

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
    <form class="login-form" id="login-form">
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
         <a href="/register" class="link" data-link>Sign up now</a>
      </div>
      <button id="login-btn" type="submit" class="btn btn-primary auth">Login</button>
    </form>
    <p id="error-message" style="color: red; display: none;">Неверный логин или пароль!</p>
  </div>
  `;
};

const registerPage = () => {
return `
<div class="register">
  <div class="container text-center">
     <div class="row">
       <p style="margin-top: 20px; font-family: ,sans-serif; font-size: 36px; color: #385273; font-weight: bold">Sign up</p>
     </div>
     <div class="row" id="register-form-container">
       <form class="register-form">
         <div class="input-group">
           <div><i class="fas fa-user"></i></div>
           <input type="text" id="username" placeholder="Username" required aria-describedby="usernameHelp">
         </div>
         <div class="input-group">
           <div><i class="fa-regular fa-envelope"></i></div>
           <input type="email" aria-describedby="emailHelp" placeholder="Email" required>
         </div>
         <div class="input-group">
           <div><i class="fa-solid fa-lock"></i></div>
           <input type="password" placeholder="Password" required>
         </div>
         <div class="input-group">
           <div><i class="fa-solid fa-lock"></i></div>
           <input type="password" placeholder="Confirm password" required>
         </div>
         <div class="mb-5">
           <button type="submit" class="btn btn-primary auth">Sign up</button>
         </div>
       </form>
     </div>
     <div class="row">
       <p class="text">Already have an account?</p>
       <a href="/login" class="link" data-link>Log In</a>
     </div>
  </div>
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
    '/':() => new HomePage().renderPage(),
    '/feed': feedPage,
    '/profile': profilePage,
    '/login': loginPage,
    '/register': registerPage,
    '/404': notFoundPage,
};

new RightMenu();
new Router(routes);