/**
 * @desc global variable. Via [ this.G.title / {{ G.title }} ] to get it in components
 *
 * debug
 * @type {boolean}
 */
const debug = false;
/**
 * embed
 * removed `Header` and `Sider` and `Breadcrumb`.
 * @type {boolean}
 */
const embed = false;
/**
 * title
 * @type {string}
 */
const title = '基础框架';
/**
 * user information( 初始化后覆盖 )
 * @type {{}}
 */
let user = {};
/**
 * site logo
 * @type {null}
 */
let logo = null;
/**
 * identification.
 * @type {{app: null, soa: null, pro: null, mapping: {app: string, pro: string, soa: string}}}
 */
let id = {
    app: null,
    soa: null,
    pro: null,
    mapping: {
        app: 'appid',
        pro: 'proId',
        soa: 'soaProId'
    }
};
/**
 * left-hand menu
 * @type {{items: *[], active: string, open: string[], collapsed: boolean}}
 */
let menu = {
    items: [
        {
            title: '基础组件',
            name: 'basic',
            icon: 'md-list',
            children: [
                {
                    title: 'Form 表单',
                    icon: 'ios-create-outline',
                    name: 'input',
                    path: '/basic/form'
                },
                {
                    title: 'Table 表格',
                    icon: 'ios-grid',
                    name: 'table',
                    path: '/basic/table'
                },
                {
                    title: 'Cascader 级联选择',
                    icon: 'ios-more-outline',
                    name: 'cascader',
                    path: '/basic/cascader'
                },
                {
                    title: 'DatePicker 日期选择',
                    icon: 'ios-calendar-outline',
                    name: 'date',
                    path: '/basic/date'
                },
                {
                    title: 'TimePicker 时间选择',
                    icon: 'ios-clock-outline',
                    name: 'time',
                    path: '/basic/time'
                }
            ]
        },
        {
            title: '扩展组件',
            name: 'extend',
            icon: 'ios-alert-outline',
            children: [
                {
                    title: 'Upload 上传',
                    icon: 'ios-cloud-upload-outline',
                    name: 'upload',
                    path: '/extend/upload'
                },
                {
                    title: 'Draggable 拖拽',
                    icon: 'ios-browsers-outline',
                    name: 'draggable',
                    path: '/extend/draggable'
                }
            ]
        },
        {
            title: '日志',
            name: 'logs',
            icon: 'ios-list-box-outline',
            children: [
                {
                    title: '登录日志',
                    icon: 'ios-log-in',
                    name: 'login',
                    path: '/logs/login'
                },
                {
                    title: '操作日志',
                    icon: 'ios-checkmark-circle-outline',
                    name: 'operation',
                    path: '/logs/operation'
                }
            ]
        }
    ],
    active: 'form',
    open: ['basic'],
    collapsed: false
};
/**
 * api
 * @type {{user: string, logout: string, project: string}}
 */
const api = {
    user: '/user',
    logout: process.env.AUTH_SERVICES + '/LoginServlet',
    project: process.env.AUTH_SERVICES + '/LoginServlet',
    dimension: process.env.UPLOAD_SERVER + '/dimension/v1/',
    region: process.env.UPLOAD_SERVER + '/region/level-list/',
    draggable: {
        base: '/basic-manager/basic-attribute',
        list: '/module-manager/module/height/{height}/module-list',
        height: '/module-manager/module/height-list',
        template: '/layout-manager/layout/{id}',
	    layout: '/layout-manager/layouts'
    }
};
/**
 * file's configuration
 * @type {{server: {download: (string), upload: (string)}, format: {images: string[], videos: string[]}, accept: {images: string}}}
 */
const files = {
    server: {
        upload: process.env.UPLOAD_SERVER,
        download: process.env.FILE_SERVER
    },
    accept: {images: 'image/gif, image/jpeg, image/png, image/jpeg'},
    format: {
        images: ['jpg', 'jpeg', 'png', 'gif'],
        videos: ['mp4', 'mkv', 'ts']
    }
};
/**
 * {name: cookie's name; expire: expiry date;}
 * note: ( unit:day )
 * @type {{collapse: {name: string, expire: number}}}
 */
const cookie = {
    collapse: {
        name: 'layout-theme-menu-collapsed',
        expire: 1
    }
};
/**
 * domains
 * @type {{auth: (string), project: (string), webservices: (string)}}
 */
const domains = {
    auth: process.env.AUTH_SERVICES,
    project: process.env.DOMAIN,
    webservices: process.env.WEB_SERVICES
};
/**
 * footer
 * @type {string}
 */
const footer = 'Copyright &copy; 2018';

export default {
    debug,
    embed,
    title,
    user,
    id,
    logo,
    menu,
    api,
    files,
    cookie,
    domains,
    footer
}
