module.exports = {
    title: '前端文档',
    description: 'A VitePress site',
    base: '/',
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