# note on course
## prepare react skeleton
1.  npm init
2.  (global) npm install -g browserify
3.  (global) npm install -g watchify
4.  npm install --save babelify
5.  npm install --save babel-preset-react
6.  npm install --save react
7.  npm install --save react-dom
8.  npm install --save react-router

## keep auto compile jsx
*package.json*
```
scripts : {
  "start": "watchify src/main.jsx -v -t [ babelify --presets [ react ] ] -o public/js/main.js",
  ...
}
```

then

```
npm start
```
