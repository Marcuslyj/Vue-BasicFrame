'use strict';
const merge = require('webpack-merge');
const prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    DOMAIN: '"https://dev-cms-operation.tvflnet.com"',
    UPLOAD_SERVER: '"https://dev-web-services.tvflnet.com"',
    FILE_SERVER: '"https://dev-file.tvflnet.com"',
    WEB_SERVICES: '"https://dev-web-services.tvflnet.com"',
    AUTH_SERVICES: '"https://dev-auth-service.tvflnet.com"'
});
