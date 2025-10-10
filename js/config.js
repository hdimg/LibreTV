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
    niuniuziyuan: {
        api: 'https://api.niuniuzy.me/api.php/provide/vod',
        name: '牛牛视频',
        adult: false,
        detail: 'https://api.niuniuzy.me'
    },
    zuidaziyuan: {
        api: 'http://zuidazy.me/api.php/provide/vod',
        name: '最大资源',
        adult: false,
        detail: 'http://zuidazy.me'
    },
    yayaziyuan: {
        api: 'https://cj.yayazy.net/api.php/provide/vod',
        name: '丫丫资源',
        adult: false,
        detail: 'https://cj.yayazy.net'
    },
    maotaiziyuan: {
        api: 'https://caiji.maotaizy.cc/api.php/provide/vod/at/josn',
        name: '茅台资源',
        adult: false,
        detail: 'https://caiji.maotaizy.cc'
    },
    yinghuaziyuan: {
        api: 'http://m3u8.apiyhzy.com/api.php/provide/vod',
        name: '樱花资源',
        adult: false,
        detail: 'http://m3u8.apiyhzy.com'
    },
    jinyingziyuan: {
        api: 'https://jyzyapi.com/provide/vod/from/jinyingm3u8',
        name: '金鹰资源',
        adult: false,
        detail: 'https://jyzyapi.com'
    },
    wangwangduanju: {
        api: 'https://wwzy.tv/api.php/provide/vod',
        name: '旺旺短剧',
        adult: false,
        detail: 'https://wwzy.tv'
    },
    "360ziyuan": {
        api: 'https://360zy.com/api.php/provide/vod',
        name: '360资源',
        adult: false,
        detail: 'https://360zy.com'
    },
    tianyiziyuan: {
        api: 'https://www.911ysw.top/tianyi.php/provide/vod',
        name: '天翼资源',
        adult: false,
        detail: 'https://www.911ysw.top'
    },
    feifanziyuan: {
        api: 'http://cj.ffzyapi.com/api.php/provide/vod/at/xml',
        name: '非凡资源',
        adult: false,
        detail: 'http://cj.ffzyapi.com'
    },
    aiqiyiziyuan: {
        api: 'https://iqiyizyapi.com/api.php/provide/vod',
        name: '爱奇艺资源',
        adult: false,
        detail: 'https://iqiyizyapi.com'
    },
    piaolingyingyuan: {
        api: 'https://p2100.net/api.php/provide/vod',
        name: '飘零影院',
        adult: false,
        detail: 'https://p2100.net'
    },
    jisuziyuan: {
        api: 'https://jszyapi.com/api.php/provide/vod/at/json',
        name: '极速资源',
        adult: false,
        detail: 'https://jszyapi.com'
    },
    "1080zyku": {
        api: 'http://api.1080zyku.com/inc/api.php/provide/vod',
        name: '1080资源',
        adult: false,
        detail: 'http://api.1080zyku.com'
    },
    liangziziyuan: {
        api: 'http://cj.lziapi.com/api.php/provide/vod/from/lzm3u8',
        name: '量子资源',
        adult: false,
        detail: 'http://cj.lziapi.com'
    },
    baofengziyuan: {
        api: 'https://bfzyapi.com/api.php/provide/vod',
        name: '暴风资源',
        adult: false,
        detail: 'https://bfzyapi.com'
    },
    wolongziyuan: {
        api: 'http://collect.wolongzyw.com/api.php/provide/vod',
        name: '卧龙资源',
        adult: false,
        detail: 'http://collect.wolongzyw.com'
    },
    dianyingtiantang: {
        api: 'http://caiji.dyttzyapi.com/api.php/provide/vod/at/xml',
        name: '电影天堂',
        adult: false,
        detail: 'http://caiji.dyttzyapi.com'
    },
    tianyayingshiziyuan: {
        api: 'https://tyyszyapi.com/api.php/provide/vod',
        name: '天涯影视',
        adult: false,
        detail: 'https://tyyszyapi.com'
    },
    guangsuziyuan: {
        api: 'https://api.guangsuapi.com/api.php/provide/vod/from/gsm3u8',
        name: '光速资源',
        adult: false,
        detail: 'https://api.guangsuapi.com'
    },
    baiduziyuan: {
        api: 'http://api.apibdzy.com/api.php/provide/vod',
        name: '百度资源',
        adult: false,
        detail: 'http://api.apibdzy.com'
    },
    modouziyuan: {
        api: 'https://www.mdzyapi.com/api.php/provide/vod',
        name: '魔都资源',
        adult: false,
        detail: 'https://www.mdzyapi.com'
    },
    doubanziyuan: {
        api: 'https://caiji.dbzy5.com/api.php/provide/vod/at/josn',
        name: '豆瓣资源',
        adult: false,
        detail: 'https://caiji.dbzy5.com'
    },
    maoyanziyuan: {
        api: 'https://api.maoyanapi.top/api.php/provide/vod',
        name: '猫眼资源',
        adult: false,
        detail: 'https://api.maoyanapi.top'
    },
    shandianziyuan: {
        api: 'http://sdzyapi.com/api.php/provide/vod/from/sdm3u8',
        name: '闪电资源',
        adult: false,
        detail: 'http://sdzyapi.com'
    },
    hongniuziyuan: {
        api: 'http://hongniuzy2.com/api.php/provide/vod/from/hnm3u8',
        name: '红牛资源',
        adult: false,
        detail: 'http://hongniuzy2.com'
    },
    suboziyuan: {
        api: 'https://subocj.com/api.php/provide/vod/at/json',
        name: '速播资源',
        adult: false,
        detail: 'https://subocj.com'
    },
    duihuanziyuan: {
        api: 'https://gctf.tfdh.top/api.php/provide/vod',
        name: '兑换资源',
        adult: false,
        detail: 'https://gctf.tfdh.top'
    },
    // 以下是您原有配置中保留的源，如果与新列表有重复，您可以手动选择保留哪一个
    ruyi: {
        api: 'https://cj.rycjapi.com/api.php/provide/vod',
        name: '如意资源',
    },
    tyyszy: {
        api: 'https://tyyszy.com/api.php/provide/vod',
        name: '天涯资源',
    },
    heimuer: {
        api: 'https://json.heimuer.xyz/api.php/provide/vod',
        name: '黑木耳',
        detail: 'https://heimuer.tv',
    },
    iqiyi: {
        api: 'https://www.iqiyizyapi.com/api.php/provide/vod',
        name: 'iqiyi资源',
    },
    hwba: {
        api: 'https://cjhwba.com/api.php/provide/vod',
        name: '华为吧资源',
    },
    dbzy: {
        api: 'https://dbzy.com/api.php/provide/vod',
        name: '豆瓣资源',
    },
    mozhua: {
        api: 'https://mozhuazy.com/api.php/provide/vod',
        name: '魔爪资源',
    },
    zuid: {
        api: 'https://api.zuidapi.com/api.php/provide/vod',
        name: '最大资源'
    },
    baidu: {
        api: 'https://api.apibdzy.com/api.php/provide/vod',
        name: '百度云资源'
    },
    wujin: {
        api: 'https://api.wujinapi.me/api.php/provide/vod',
        name: '无尽资源'
    },
    ikun: {
        api: 'https://ikunzyapi.com/api.php/provide/vod',
        name: 'iKun资源'
    }
    //ARCHIVE: https://telegra.ph/APIs-08-12
};

// 抽象API请求配置
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
window.ERROR_MESSAGES = ERROR_MESSAGES; // 将错误信息也暴露出去，方便全局调用
