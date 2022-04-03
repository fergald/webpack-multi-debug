Demonstrates that multi-main entry with webpack only gives access to
the last library in the list.

To see what's happening do

```sh
git clone https://github.com/fergald/webpack-multi-debug
cd webpack-multi-debug
npm install
npx webpack
npx http-server
```

and then go to http://localhost:8080/test.html and open the devtools
console. You will see that the value `d2` from `js/lib2.js` is
available but the value `d1` from `js/lib1.js` is not.
