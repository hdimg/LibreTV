// =================================================================
// 1. 核心与基础配置
// =================================================================

// 全局常量配置
const PROXY_URL = '/proxy/';    // 适用于 Cloudflare, Netlify (带重写), Vercel (带重写)
const SEARCH_HISTORY_KEY = 'videoSearchHistory';
const MAX_HISTORY_ITEMS = 5;

// 网站信息配置
const SITE_CONFIG = {
    name: 'LibreTV',
    url: 'https://libretv.is-an.org',
    description: '免费在线视频搜索与观看平台',
    logo: 'image/logo.png',
    version: '1.0.3'
};

// =================================================================
// 2. API 与数据源配置
// =================================================================

// API站点配置 (已合并所有源，并解决重复声明问题)
const API_SITES = {
    // 内置测试源
    testSource: {
        api: 'https://www.example.com/api.php/provide/vod',
        name: '空内容测试源',
        adult: true
    },
    // --- 视频资源站点 (苹果CMS类型) ---
    dytt: {
        api: 'http://caiji.dyttzyapi.com/api.php/provide/vod',
        name: '电影天堂资源',
        detail: 'http://caiji.dyttzyapi.com',
    },
    ruyi: {
        api: 'https://cj.rycjapi.com/api.php/provide/vod',
        name: '如意资源',
    },
    bfzy: {
        api: 'https://bfzyapi.com/api.php/provide/vod',
        name: '暴风资源',
    },
    tyyszy: {
        api: 'https://tyyszy.com/api.php/provide/vod',
        name: '天涯资源',
    },
    ffzy: {
        api: 'http://ffzy5.tv/api.php/provide/vod',
        name: '非凡影视',
        detail: 'http://ffzy5.tv',
    },
    heimuer: {
        api: 'https://json.heimuer.xyz/api.php/provide/vod',
        name: '黑木耳',
        detail: 'https://heimuer.tv',
    },
    zy360: {
        api: 'https://360zy.com/api.php/provide/vod',
        name: '360资源',
    },
    iqiyi: {
        api: 'https://www.iqiyizyapi.com/api.php/provide/vod',
        name: 'iqiyi资源',
    },
    wolong: {
        api: 'https://wolongzyw.com/api.php/provide/vod',
        name: '卧龙资源',
    },
    hwba: {
        api: 'https://cjhwba.com/api.php/provide/vod',
        name: '华为吧资源',
    },
    jisu: {
        api: 'https://jszyapi.com/api.php/provide/vod',
        name: '极速资源',
        detail: 'https://jszyapi.com',
    },
    dbzy: {
        api: 'https://dbzy.com/api.php/provide/vod',
        name: '豆瓣资源',
    },
    mozhua: {
        api: 'https://mozhuazy.com/api.php/provide/vod',
        name: '魔爪资源',
    },
    mdzy: {
        api: 'https://www.mdzyapi.com/api.php/provide/vod',
        name: '魔都资源',
    },
    zuid: {
        api: 'https://api.zuidapi.com/api.php/provide/vod',
        name: '最大资源'
    },
    yinghua: {
        api: 'https://m3u8.apiyhzy.com/api.php/provide/vod',
        name: '樱花资源'
    },
    baidu: {
        api: 'https://api.apibdzy.com/api.php/provide/vod',
        name: '百度云资源'
    },
    wujin: {
        api: 'https://api.wujinapi.me/api.php/provide/vod',
        name: '无尽资源'
    },
    wwzy: {
        api: 'https://wwzy.tv/api.php/provide/vod',
        name: '旺旺短剧'
    },
    ikun: {
        api: 'https://ikunzyapi.com/api.php/provide/vod',
        name: 'iKun资源'
    }
    //ARCHIVE: https://telegra.ph/APIs-08-12
};

// --- 新增部分：整合 TVBox 类型的 CSP API 源 ---
// 1. 定义从 TVBox 配置中提取的 API 源 JSON 字符串
const TVBOX_API_SOURCES_JSON = `[
    {"key":"csp_Gz360","name":"🍉瓜子","type":3,"api":"csp_Gz360","searchable":1,"quickSearch":1,"filterable":1},
    {"key":"csp_LiteApple","name":"🍎苹果","type":3,"api":"csp_LiteApple","searchable":1,"quickSearch":1,"filterable":1},
    {"key":"巧技二","name":"💢聚搜┃仅搜索","type":3,"api":"csp_qiao2","searchable":1,"quickSearch":1,"filterable":1,"ext":"7lj763gg402i79425739i7jghj118797l4hj840gi18633331l4708g2h7145403549g44l8ii56i187681hkjj3hhgh1ih3l32j250lk1k786lj20j468hk3hli4l46gig4i3g7g2722328j0136h01i7g5183k22k7gg3i72hk81gl8k9839kl7i0707"},
    {"key":"天天","name":"⛅天天","type":3,"api":"csp_TTian","searchable":1,"quickSearch":1,"filterable":1,"ext":"7lj763gg0939791h1l3888jig44gi291li"},
    {"key":"追剧","name":"✈追剧","type":3,"api":"csp_TTian","searchable":1,"quickSearch":1,"filterable":1,"ext":"7lj763gg0939791h1l2681i6g94li291li"},
    {"key":"金牌","name":"🥇金牌","type":3,"api":"csp_Jpys","searchable":1,"quickSearch":1,"filterable":1,"ext":"7lj763gg402i7942463j9j9jh8579590k3hjii5gi4i73l2k5l"},
    {"key":"巧技三","name":"⚡QD4K","type":3,"api":"csp_Qiji","searchable":1,"quickSearch":1,"filterable":1,"ext":"7lj763gg0939791i5820839jhg498h93ljh9i353ihi73l2k5l5j48g4l21j035j01850ig6i904998l6j09g1j0g1l712hlg37g670ll5k39jl62jj329kl3ilj19"},
    {"key":"yizhan","name":"🚗驿站","type":3,"api":"csp_Qiji","searchable":1,"quickSearch":1,"filterable":1,"ext":"7lj763gg402i7942552h8ljjlj0jjki7g4lg99099jjh6l6l514k08hjl807161j139753h090539gig3604gi80lgl30jk3hk637h53gh9ljkij2lig30k277g50354k2k3jkl1g17i2820ii582l0483g61k6i79k7kk7274h1i5g6jjj833h2390k42396hik71kigl18k613"},
    {"key":"趣看","name":"🎐趣看","type":3,"api":"csp_Qiji","searchable":1,"quickSearch":1,"filterable":1,"ext":"7lj763gg402i7942552h8ljjlj0jjki7g4lg99099jjh6l6l514k08hjl807161j139753h090539gig3604gi80lgl30jk3hk637h53gh9ljkij2lig30k277g50354k2k3jkl1g17i2820ii582l0483g61k6i79k7kk7274h1i5g6jjj833h2390k42396hik71kigl18k613"},
    {"key":"huomaoys","name":"😺火猫","type":3,"api":"csp_Muou","searchable":1,"quickSearch":1,"filterable":1,"ext":"7lj763gg0939790i413gi484k8058896highi4414h68l7g6hk8qiaojig9k2k289l9ik807i213k5j602"},
    {"key":"主角","name":"🍃主角","type":3,"api":"csp_Muou","searchable":1,"quickSearch":1,"filterable":1,"ext":"7lj763gg402i794247258k9jh6598585l3g6ij13il8g20g9qiaoji8j9i9k1g3k90h7i507i213k5j602"},
    {"key":"云云","name":"☁云云","type":3,"api":"csp_Qiji","searchable":1,"quickSearch":1,"filterable":1,"ext":"7lj763gg402i79425h2384j4g949j899hll9990i9kjl6l740h1342hjlg1848401g8610h9995i998j351gl38kklkj1hkhll757010k7hji6h377ih37k060g35161jhl3i5h0l2702g7299452l4297k5697g5390lk6935k2i9g48l8j2kh27l1g014k7j9475g8"},
    {"key":"csp_Wwys","name":"👩‍🌾农民","type":3,"api":"csp_Wwys","searchable":1,"quickSearch":1,"filterable":1,"ext":"https://www.wwgz.cn"},
    {"key":"csp_SaoHuo","name":"🔥骚火","type":3,"api":"csp_SaoHuo","playerType":2,"searchable":1,"quickSearch":1,"filterable":1,"ext":"https://shdy5.us"},
    {"key":"csp_FourK","name":"🌋绝对","type":3,"api":"csp_FourK","playerType":"2","searchable":1,"quickSearch":1,"filterable":1,"ext":"https://www.4kvm.me/"},
    {"key":"csp_Qiyou","name":"🦌奇优","type":3,"api":"csp_Qiyou","searchable":1,"quickSearch":1,"filterable":1},
    {"key":"csp_Czsapp","name":"🏭厂长","type":3,"api":"csp_Czsapp","playerType":2,"searchable":1,"quickSearch":1,"filterable":1,"ext":"https://www.czzymovie.com/"},
    {"key":"csp_Tvyb","name":"☁️TVB云播","type":3,"api":"csp_Tvyb","playerType":2,"searchable":1,"quickSearch":1,"filterable":1},
    {"key":"可可","name":"☕️可可","type":3,"api":"csp_XYQHiker","searchable":1,"quickSearch":1,"filterable":1,"ext":"https://ghfast.top/raw.githubusercontent.com/yoursmile66/TVBox/main/json/可可影视.json"},
    {"key":"剧圈圈","name":"⭕剧圈圈","type":3,"api":"csp_XYQHiker","searchable":1,"quickSearch":1,"filterable":1,"ext":"https://ghfast.top/raw.githubusercontent.com/yoursmile66/TVBox/main/json/剧圈圈.json","click":"document.getElementById('playleft').children[0].contentWindow.document.getElementById('start').click()"},
    {"key":"影视大全","name":"🎞影视大全","type":3,"api":"csp_XBPQ","ext":{"分类url":"https://www.iysdq.cc/vodshow/{cateId}-{area}-------{catePg}---.html","分类":"电影$1#电视剧$2#综艺$3#动漫$4#短剧$5"}},
    {"key":"永乐","name":"🍰永乐","type":3,"api":"csp_XBPQ","searchable":1,"quickSearch":1,"filterable":1,"ext":{"请求头":"User-Agent$MOBILE_UA","编码":"UTF-8","分类":"电影$1#电视剧$2#综艺$3#动漫$4","类型":"动作片$6#喜剧片$7#爱情片$8#科幻片$9#奇幻片$10#恐怖片$11#剧情片$12#战争片$20#动画片$26#悬疑片$22#冒险片$23#犯罪片$24#惊悚片$45#歌舞片$46#灾难片$47#网络片$48||国产剧$13#港台剧$14#日剧$15#韩剧$33#欧美剧$16#泰剧$34#新马剧$35#其他剧$25||内地综艺$27#港台综艺$28#日本综艺$29#韩国综艺$36#欧美综艺$30#新马泰综艺$37#其他综艺$38||国产动漫$31#日本动漫$32#韩国动漫$39#港台动漫$40#新马泰动漫$41#欧美动漫$42#其他动漫$43","分类url":"https://www.ylys.tv/vodshow/{cateId}-{area}-{by}-{class}-{lang}-{letter}---{catePg}---{year}.html"}},
    {"key":"面包","name":"🎁面包","type":3,"api":"csp_XBPQ","searchable":1,"quickSearch":1,"filterable":1,"ext":{"请求头":"User-Agent$MOBILE_UA","编码":"UTF-8","分类url":"https://v.aiwule.com/vodshow/{cateId}-{area}-{by}-{class}-{lang}-{letter}---{catePg}---{year}.html","分类":"电影$20#电视剧$21#动漫$23#综艺$22#短剧$47","简介":"简介：&&"}},
    {"key":"ZXZJ","name":"🏠在线","api":"csp_Zxzj","type":3,"searchable":1,"quickSearch":1,"filterable":1,"ext":"7lj763gg402i7942463j9j9jgg449698khhh845ki38473"},
    {"key":"csp_Jiaozi","name":"🥣饺子","type":3,"api":"csp_Jiaozi","searchable":1,"quickSearch":1,"filterable":1},
    {"key":"csp_Ddys","name":"📺低端","type":3,"api":"csp_Ddys","searchable":1,"quickSearch":1,"filterable":1},
    {"key":"csp_Ikanbot","name":"👾Ikanbot","type":3,"api":"csp_Ikanbot","searchable":1,"quickSearch":1,"filterable":1},
    {"key":"csp_Lkdy","name":"🏔️来看","type":3,"api":"csp_Lkdy","searchable":1,"quickSearch":1,"filterable":1,"ext":"https://lkvod.com"},
    {"key":"csp_Jianpian","name":"🧲荐片","type":3,"api":"csp_Jianpian","searchable":1,"quickSearch":1,"filterable":1,"ext":"https://ghfast.top/raw.githubusercontent.com/yoursmile66/TVBox/main/json/jianpian.json"},
    {"key":"csp_xlys","name":"🧲修罗","type":3,"api":"csp_xlys","searchable":1,"quickSearch":1,"filterable":1,"ext":"https://xl01.com.de/"},
    {"key":"csp_New6v","name":"🧲新6V","type":3,"api":"csp_New6v","searchable":1,"quickSearch":1,"filterable":1},
    {"key":"csp_DyGod","name":"🧲电影天堂","type":3,"api":"csp_DyGod","searchable":1,"quickSearch":1,"filterable":1},
    {"key":"csp_QnMp4","name":"🧲七妹","type":3,"api":"csp_QnMp4","searchable":1,"quickSearch":1,"filterable":1},
    {"key":"csp_MeijuTT","name":"🧲美剧天堂","type":3,"api":"csp_MeijuTT","searchable":1,"quickSearch":1,"filterable":1},
    {"key":"csp_MeijuMi","name":"🧲美剧迷","type":3,"api":"csp_MeijuMi","searchable":1,"quickSearch":1,"filterable":1,"ext":"https://www.meijumi.net/"},
    {"key":"csp_BLSGod","name":"🧲80S影视","type":3,"api":"csp_BLSGod","searchable":1,"quickSearch":1,"filterable":1},
    {"key":"csp_SP360","name":"💘360","type":3,"api":"csp_SP360","searchable":1,"quickSearch":1,"filterable":1,"changeable":1},
    {"key":"csp_Dm84","name":"🚌动漫巴士","type":3,"api":"csp_Dm84","searchable":1,"quickSearch":1,"filterable":1,"ext":"https://dm84.net"},
    {"key":"csp_Ysj","name":"📮异世界","type":3,"api":"csp_Ysj","searchable":1,"quickSearch":1,"filterable":1},
    {"key":"樱花","name":"💮樱花","type":3,"api":"csp_XYQHiker","searchable":1,"quickSearch":1,"filterable":1,"ext":"https://ghfast.top/raw.githubusercontent.com/yoursmile66/TVBox/main/json/樱花动漫.json"}
]`;

// 2. 解析并转换 CSP 源格式
try {
    const tvboxSourcesArray = JSON.parse(TVBOX_API_SOURCES_JSON);
    const convertedCspSources = {};

    tvboxSourcesArray.forEach(source => {
        // 使用 key 作为新对象的键
        const key = source.key;
        convertedCspSources[key] = {
            name: source.name,
            // 将原始的 'api' 字段重命名为 'cspApi' 以示区别
            cspApi: source.api,
            // 保留所有其他元数据
            type: source.type,
            ext: source.ext,
            searchable: source.searchable,
            quickSearch: source.quickSearch,
            filterable: source.filterable,
            // 添加一个明确的标记，方便前端代码识别
            isCspSource: true,
            // 保留可能存在的其他字段
            ...(source.playerType && { playerType: source.playerType }),
            ...(source.click && { click: source.click }),
            ...(source.changeable && { changeable: source.changeable }),
        };
    });

    // 3. 使用 extendAPISites 函数将转换后的源合并到全局 API_SITES
    extendAPISites(convertedCspSources);

} catch (e) {
    console.error("解析或整合 TVBox API 源时出错:", e);
}
// --- 新增部分结束 ---


// 抽象API请求配置 (主要适用于苹果CMS源)
const API_CONFIG = {
    search: {
        path: '?ac=videolist&wd=',
        pagePath: '?ac=videolist&wd={query}&pg={page}',
        maxPages: 50,
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    },
    detail: {
        path: '?ac=videolist&ids=',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    }
};

// 聚合搜索配置
const AGGREGATED_SEARCH_CONFIG = {
    enabled: true,
    timeout: 8000,
    maxResults: 10000,
    parallelRequests: true,
    showSourceBadges: true
};

// 自定义API源配置
const CUSTOM_API_CONFIG = {
    separator: ',',
    maxSources: 5,
    testTimeout: 5000,
    namePrefix: 'Custom-',
    validateUrl: true,
    cacheResults: true,
    cacheExpiry: 5184000000, // 2个月
    adultPropName: 'isAdult'
};

// =================================================================
// 3. 功能与UI配置
// =================================================================

// 播放器配置
const PLAYER_CONFIG = {
    autoplay: true,
    allowFullscreen: true,
    width: '100%',
    height: '600',
    timeout: 15000,
    filterAds: true,
    autoPlayNext: true,
    adFilteringEnabled: true,
    adFilteringStorage: 'adFilteringEnabled'
};

// 播放器URL
const CUSTOM_PLAYER_URL = 'player.html';

// 正则表达式模式
const M3U8_PATTERN = /\$https?:\/\/[^"'\s]+?\.m3u8/g;

// =================================================================
// 4. 安全与隐私配置
// =================================================================

// 密码保护配置
// 注意：PASSWORD 环境变量是必需的，所有部署都必须设置密码以确保安全
const PASSWORD_CONFIG = {
    localStorageKey: 'passwordVerified',
    verificationTTL: 90 * 24 * 60 * 60 * 1000 // 90天
};

// 安全设置
const SECURITY_CONFIG = {
    enableXSSProtection: true,
    sanitizeUrls: true,
    maxQueryLength: 100
};

// 隐藏内置成人内容API的开关
const HIDE_BUILTIN_ADULT_APIS = false;

// =================================================================
// 5. 工具函数与全局暴露
// =================================================================

// 定义合并API站点的方法
function extendAPISites(newSites) {
    Object.assign(API_SITES, newSites);
}

// 错误信息本地化
const ERROR_MESSAGES = {
    NETWORK_ERROR: '网络连接错误，请检查网络设置',
    TIMEOUT_ERROR: '请求超时，服务器响应时间过长',
    API_ERROR: 'API接口返回错误，请尝试更换数据源',
    PLAYER_ERROR: '播放器加载失败，请尝试其他视频源',
    UNKNOWN_ERROR: '发生未知错误，请刷新页面重试'
};

// 暴露必要的对象和函数到全局作用域，以便其他脚本使用
window.API_SITES = API_SITES;
window.extendAPISites = extendAPISites;
window.ERROR_MESSAGES = ERROR_MESSAGES;
