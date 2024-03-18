<h1 align="center">Welcome to One Dionys - CSRF Protection Middleware! 👋 </h1>

<p align="center">Middleware to protect applications from CSRF (Cross-Site Request Forgery) attacks by adding tokens to HTTP requests. 💖 </p>

<p align="center">
<img src="https://img.shields.io/github/contributors/onedionys/onedionys-csrf-protection-middleware?style=flat-square">
<img src="https://img.shields.io/github/issues/onedionys/onedionys-csrf-protection-middleware?style=flat-square">
<img src="https://img.shields.io/github/stars/onedionys/onedionys-csrf-protection-middleware?style=flat-square"> 
<img src="https://img.shields.io/github/forks/onedionys/onedionys-csrf-protection-middleware?style=flat-square">
<img src="https://img.shields.io/github/last-commit/onedionys/onedionys-csrf-protection-middleware.svg?style=flat-square">
<img src="https://img.shields.io/github/languages/code-size/onedionys/onedionys-csrf-protection-middleware?style=flat-square">
<img src="https://img.shields.io/github/license/onedionys/onedionys-csrf-protection-middleware?style=flat-square">
</p>

## 💾 Requirements

* `Web Browser` - Can be used as an emulator to build applications. Example [Chrome, Firefox, Safari & Opera].
* `Internet` - Because many use CDN and to make it easier to find solutions to all problems.

## 🎯 How To Use

#### Example Syntax

```javascript
const express = require('express');
const session = require('express-session');
const csrfMiddleware = require('./src/csrfMiddleware');

const app = express();

// Setup session middleware
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true
}));

// Use CSRF protection middleware
app.use(csrfMiddleware);

// Your other middleware and routes

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
```

#### Explanation

* This middleware generates a CSRF token and stores it in the user's session. It adds this token to requests as a hidden field in forms or as a custom HTTP header. When the user submits a form or makes a request, the server verifies that the CSRF token matches the one stored in the session, protecting against CSRF attacks.

#### Return Value

* The middleware returns a function that acts as middleware in Express.js applications. This function adds CSRF protection to routes by generating and storing CSRF tokens in user sessions.

## 📆 Release Date

* v1.0.0 : 17 March 2024
* v1.0.1 : 18 March 2024

## 🧑 Author

* Facebook : <a href="https://www.facebook.com/theonedionys"> Oned Ionys</a>
* Instagram : <a href="https://www.instagram.com/onedionys/"> @onedionys</a>
* Twitter : <a href="https://twitter.com/onedionys"> @onedionys</a>
* LinkedIn :  <a href="https://www.linkedin.com/in/onedionys/"> @onedionys</a>

## 📝 License

* Copyright © 2024 One Dionys
* **One Dionys - CSRF Protection Middleware is an open source project licensed under the MIT license**

## ☕️ Suppport & Donation

Love One Dionys - CSRF Protection Middleware? Support this project by donating or sharing with others in need.

<a href="https://www.buymeacoffee.com/onedionys"><img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black"/> </a>

**Made with ❤️ One Dionys**
