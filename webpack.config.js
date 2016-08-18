module.exports = {
    cache: true,
    entry: {
        'angular-fast-drag': __dirname + "/src/angular-fast-drag.js",
    },
    output: {
        libraryTarget: "umd",
        library: "AngularFastDrag",
        path: "./dist",
        pathInfo: false,
        // publicPath: "/static/",
        filename: "angular-fast-drag.js",
    },
    externals: {
        'angular': 'angular',
    },
    module: {
        loaders: [{
            test: /\.less$/,
            loaders: ['style-loader', 'css-loader', 'autoprefixer-loader', 'less-loader'],
        }],
        // noParse: [
        //   require.resolve('angular'),
        // ]
    },
    resolve: {
        modulesDirectories: ["node_modules", "src"],
        root: __dirname,
    },
};