var px2rem = require('postcss-px2rem')
const webpack = require('webpack')
const path = require('path');
const postcss = px2rem({
    remUnit: 50 //基准大小 baseSize，需要和rem.js中相同
})
module.exports = {
    // 基本路径
    publicPath: './',
    pages: {
        index: {
            // entry for the page
            entry: 'src/main.js',
            // the source template
            template: 'public/index.html',
            // output as dist/index.html
            filename: 'index.html',
            // when using title option,
            // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
            title: '测试-web',
            // chunks to include on this page, by default includes
            // extracted common chunks and vendor chunks..

            chunks: ['chunk-vendors', 'chunk-common', 'index']
        }
        // when using the entry-only string format,
        // template is inferred to be `public/subpage.html`
        // and falls back to `public/index.html` if not found.
        // Output filename is inferred to be `subpage.html`.
        // subpage: 'src/subpage/main.js'
    },
    css: {
        loaderOptions: {
            postcss: {
                plugins: [postcss]
            }
        }
    },
    // 全局变量配置
    chainWebpack: (config) =>{
        config.resolve.alias
        .set('@', path.join(__dirname, 'src'))
        .set('static', path.join(__dirname, 'public/static'))
    },
    // 修改webpack配置
    configureWebpack: (config) => {
        // 配置全局引入
        const providePlugin = new webpack.ProvidePlugin({})
        config.plugins.push(providePlugin)
    },
    devServer: {
        port: 3002,
        overlay: {
            // 显示在页面上
            // warnings: true,
            errors: true
        }
    }
}
