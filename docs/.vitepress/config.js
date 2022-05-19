const argv = require('minimist')(process.argv.slice(2))
const build = argv.build || false
const baseBuild = build ? '/vitepress-demo/' : '/'

module.exports = {
    title: '前端文档',
    description: 'A VitePress site',
    base: baseBuild,
    head: [],
    themeConfig: {
        // 头部导航
        sidebar:[
            {
                text: 'Bar',
                link: '/bar/'
            },
            {
                text: 'Foo',
                link: '/foo/'
            },
        ]
    }
}