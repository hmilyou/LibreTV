const CUSTOMER_SITES = {
    qiqi: {
        api: 'https://www.hongniuzy2.com/api.php/provide/vod',
        name: '红牛',
        api: 'https://cj.lziapi.com/api.php/provide/vod',
        name: '影视工程',
        api: 'https://360zyzz.com/api.php/provide/vod',
        name: '360',
        api: 'https://www.qiqidys.com/api.php/provide/vod',
        name: '七七资源',
        api: 'https://www.qiqidys.com/api.php/provide/vod',
        name: '七七资源',
        api: 'https://www.qiqidys.com/api.php/provide/vod',
        name: '七七资源',
        api: 'https://www.qiqidys.com/api.php/provide/vod',
        name: '七七资源',
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
