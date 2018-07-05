## Testing a bug with `webpack-dev-server`

Start with

```
npm install
npm run start
```

Access http://localhost:8000/test and it should return `Hello world` from the proxied server.

It seems however that the `proxy` config for `webpack-dev-server` does not accept an object directly even though the [proxy schema](https://github.com/webpack/webpack-dev-server/blob/master/lib/optionsSchema.json#L244) allows it.

Change `webpack.config.js` to specify the proxy config instead as a list and it works.

```diff
    devServer: {
        contentBase: false,
        host: 'localhost',
-       proxy: {
+       proxy: [{
            context: () => true,
            target: 'http://localhost',
-       },
+       }],
        port: 8000,
    },
```
