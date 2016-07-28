# Demonstration of using SweetAlert2 with [webpack](https://webpack.github.io/)

#### index.js:
```js
require('sweetalert2');
require('sweetalert2/dist/sweetalert2.css');

swal('Hi from webpack!');
```

#### Compile:
```sh
webpack index.js bundle.js
```

---

Live result: https://limonte.github.io/sweetalert2-webpack-demo/

---

Read more about webpack usage: https://github.com/petehunt/webpack-howto
