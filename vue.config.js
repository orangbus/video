const webpack = require('webpack');

module.exports = {
    configureWebpack:{
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
                Popper: ['popper.js', 'default'],
            })
        ],
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'https://www.8k.cm/',
                changeOrigin: true,
                ws: true,
                pathRewrite:{
                    '^/api':''
                }
            }
        },
        host:'localhost',
        port: '8080'
    },

};