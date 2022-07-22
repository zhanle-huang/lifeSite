var px2rem = require('postcss-px2rem')
const webpack = require('webpack')
const path = require('path');
require('events').EventEmitter.defaultMaxListeners = 0;
const postcss = px2rem({
    remUnit: 100 //基准大小 baseSize，需要和rem.js中相同
})
const servesIP =
  process.env.VUE_APP_SERVE_TYPE === 'production'
    ? 'http://10.44.20.232/' //正式环境1
    : 'http://10.44.20.234/' //测试环境

const dssServerIp =
  process.env.VUE_APP_SERVE_TYPE === 'production'
    ? servesIP
    : 'https://19.25.74.15:7070/'

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
            },
            less: {
                additionalData: `@import "./src/assets/css/common.less";`
            }
        }
    },
    // 全局变量配置
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', path.join(__dirname, 'src'))
            .set('static', path.join(__dirname, 'public/static'))
        // 引入全局less变量
        const oneOfsMap = config.module.rule('less').oneOfs.store
        oneOfsMap.forEach(item => {
            item
                .use('sass-resources-loader')
                .loader('sass-resources-loader')
                .options({
                    // 这里填入你的样式文件地址,也可以是数组
                    resources: './src/assets/css/common.less'
                })
                .end()
        })
    },
    // 修改webpack配置
    configureWebpack: (config) => {
        // 配置全局引入
        const providePlugin = new webpack.ProvidePlugin({
            $http: path.join(__dirname, 'src/api/http.js')
        })
        config.plugins.push(providePlugin)
    },
    devServer: {
        // open: true,
        port: 3002,
        overlay: {
            // 显示在页面上
            warnings: false,
            errors: true
        },
        // disableHostCheck: true,
        // 配置跨域请求头，解决开发环境的跨域问题
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
        proxy: {
            '/lifeSite': {
                target: 'http://127.0.0.1:3000/lifeSite/',
                changeOrigin: true,
                pathRewrite: {
                    '^/lifeSite': '/'
                }
            },

            // 山洪
            '/mfps-svc': {
                target: 'http://10.44.21.114/',
                ws: true,
                changeOrigin: true,
            },
            '/appsvc': {
                target: servesIP,
                changeOrigin: true,
                ws: true,
                // pathRewrite: {
                //   '^/appsvc-test/': '/appsvc/'
                // }
            },
            '/watersituation-station/': {
                target: servesIP,
                changeOrigin: true,
                ws: true,
            },
            '/wcs/rras/': {
                target: servesIP,
                changeOrigin: true,
                ws: true,
            },
            '/paint-flood/': {
                target: servesIP,
                changeOrigin: true,
                ws: true,
            },
            //geoserver
            '/114/geoserver/': {
                target: servesIP,
                changeOrigin: true,
                ws: true,
            },
            '/200/geoserver/': {
                target: 'http://10.44.20.200/',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/200/': '',
                },
            },
            '/paint-test/': {
                target: servesIP,
                changeOrigin: true,
                ws: true,
            },
            '/paint-mfps/': {
                target: servesIP,
                changeOrigin: true,
                ws: true,
            },
            '/mwwd-image/': {
                target: servesIP,
                changeOrigin: true,
                ws: true,
            },
            '/vsip-service/': {
                target: 'http://10.44.20.209/',
                changeOrigin: true,
                ws: true,
            },
            '/wcs-plot/': {
                target: servesIP,
                changeOrigin: true,
                ws: true,
            },
            '/mwwd-service/': {
                target: servesIP,
                changeOrigin: true,
                ws: true,
            },
            '/mas/tc-api/': {
                target: 'http://open.zaiyaa.com/',
                changeOrigin: true,
                ws: true,
            },
            '/mas/esdb/': {
                // target: 'http://open.zaiyaa.com/',
                target: 'http://gd.yjzh.org.cn:7001/',
                changeOrigin: true,
                ws: true,
            },
            '/mas/radar-api/': {
                // target: 'http://open.zaiyaa.com/',
                target: 'http://gd.yjzh.org.cn:7001/',
                changeOrigin: true,
                ws: true,
            },
            '/mas/res/cloud/': {
                // target: 'http://open.zaiyaa.com/',
                target: 'http://gd.yjzh.org.cn:7001/',
                changeOrigin: true,
                ws: true,
            },
            '/dss-server-gdyjt/': {
                // target: 'http://gd.yjzh.org.cn:7001/',
                target: 'https://gd.yjzh.org.cn:7003/',
                changeOrigin: true,
                ws: true,
            },
            '/dss-server-gdslt/': {
                target: 'https://xtzh.gdwater.gov.cn/',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    'dss-server-gdslt': 'dss-server-gdyjt',
                },
            },
            '/dss-opp-gdslt-emds/': {
                target: 'https://xtzh.gdwater.gov.cn/',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    'dss-opp-gdslt-emds': 'dss-opp-gdyjt-emds',
                },
            },
            '/mag-server/': {
                target: 'http://10.44.20.222:80/',
                changeOrigin: true,
                ws: true,
            },
            '/document/': {
                target: servesIP,
                changeOrigin: true,
                ws: true,
            },
            '/rainwater/': {
                target: servesIP,
                changeOrigin: true,
                ws: true,
            },
            '/warning/': {
                target: servesIP,
                changeOrigin: true,
                ws: true,
            },
            // 洪水风险防御概化图图片
            '/canvasPictureUrl/': {
                target: servesIP,
                changeOrigin: true,
                ws: true,
            },
            '/satellite/': {
                target: servesIP,
                changeOrigin: true,
                ws: true,
            },
            '/achievements/': {
                target: servesIP,
                changeOrigin: true,
                ws: true,
            },
            '/iserver/': {
                target: servesIP,
                changeOrigin: true,
                ws: true,
            },
            '/arcgis/': {
                target: servesIP,
                changeOrigin: true,
                ws: true,
            },
            /** 配置视频网关地址 */
            '/play222/': {
                target: 'http://10.44.20.222/',
                ws: true,
                changeOrigin: false,
                pathRewrite: {
                    '^/play222/': '',
                },
            },
            '/play223/': {
                target: 'http://10.44.20.223/',
                ws: true,
                changeOrigin: false,
                pathRewrite: {
                    '^/play223/': '',
                },
            },
            '/play224/': {
                target: 'http://10.44.20.224/',
                ws: true,
                changeOrigin: false,
                pathRewrite: {
                    '^/play224/': '',
                },
            },
            '/play225/': {
                target: 'http://10.44.20.225/',
                ws: true,
                changeOrigin: false,
                pathRewrite: {
                    '^/play225/': '',
                },
            },
            //预警信号
            '/mfps/wcs': {
                target: 'http://10.44.21.114/',
                ws: true,
                changeOrigin: false,
                pathRewrite: {
                    '^/mfps/': '',
                },
            },

            //新视频
            '/vsap-opp-service/': {
                target: 'http://10.144.21.131/',
                ws: true,
                changeOrigin: false,
            },
            // '/vsap-opp-service/': {
            //   target: 'http://10.144.21.74:8011/',
            //   ws: true,
            //   changeOrigin: false
            // },
            '/mag/': {
                target: 'http://10.144.21.131/',
                ws: true,
                changeOrigin: false,
            },
            // '/mag/': {
            //   target: 'http://10.144.21.74:8011/',
            //   ws: true,
            //   changeOrigin: false
            // },

            '/asZaiyaa/': {
                target: 'http://10.44.20.234',
                ws: true,
                changeOrigin: false,
            },
            //水库图片
            '/dtjgimages/': {
                target: 'http://10.44.21.60',
                ws: true,
                changeOrigin: false,
            },
            '/dx/': {
                target: 'http://10.44.20.234',
                ws: true,
                changeOrigin: false,
            },
            '/dt/': {
                target: 'http://10.44.20.234',
                ws: true,
                changeOrigin: false,
            },
            '/wx/': {
                target: 'http://10.44.20.234',
                ws: true,
                changeOrigin: false,
            },
            '/215/map/': {
                target: 'http://10.44.20.234',
                ws: true,
                changeOrigin: false,
            },

            '/appZaiyaa/svc/': {
                target: 'http://10.44.20.234',
                ws: true,
                changeOrigin: false,
            },
            //用户登录和权限管理服务
            '/esp-admin': {
                // target: 'http://10.144.21.80',
                // target: 'http://10.144.21.80:8099',
                target: 'http://10.44.20.234',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/esp-admin': '/esp-admin',
                },
            },
            '/esp-admin-v1': {
                // target: 'http://10.144.21.80',
                // target: 'http://10.144.21.80:8099',
                // target: 'http://10.44.20.234',
                target: 'https://19.15.19.85',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/esp-admin-v1': '/esp-admin-v1',
                },
            },
            '/dss-opp-gdyjt/': {
                target: 'https://120.24.210.187:13041',
                changeOrigin: true,
                ws: true,
            },
            '/dss-opp-gdyjt-emds/': {
                // target: servesIP,
                // target: 'http://19.15.19.85/',
                target: dssServerIp,
                changeOrigin: true,
                ws: true,
            },

            // wcs
            '/wcs/stu/': {
                target: 'http://10.44.20.241:9013/',
                ws: true,
                changeOrigin: false,
            },
            '/sh-defenseMap/': {
                target: servesIP,
                changeOrigin: true,
            },
            '/fdccp-plotting/': {
                target: 'https://xtzh.gdwater.gov.cn/',
                changeOrigin: true,
            },

        }
    }
}
