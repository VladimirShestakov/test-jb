if (typeof process.env.NODE_ENV === 'undefined')  process.env.NODE_ENV = 'development';

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: {
        colors: true
    },
    proxy: {
        '/api*': {
            target: 'http://127.0.0.1:8089',
            secure: false
        },
    }
}).listen(8088, 'localhost', function (err) {
    if (err) {
        console.log(err);
    }
    console.log('Front-end listening at localhost:8088');
});

require('./server.js');