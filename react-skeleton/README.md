build react skeleton
1. npm init
2. (global) npm install -g browserify
3. npm install --save babelify
4. npm install --save watchify
5. npm install --save babel-preset-react
6. npm install --save react
7. npm install --save react-dom

keep auto compile jsx
* package.json
```
script : {
  "start": "watchify src/main.jsx -v -t [ babelify --presets [ react ] ] -o public/js/main.js",
  ...
}
```
