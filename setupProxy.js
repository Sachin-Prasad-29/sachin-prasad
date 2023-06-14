const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api', // Specify the base URL or path of the API requests
        createProxyMiddleware({
            target: 'http://13.127.92.110:8080', // Specify the URL of the HTTP server
            changeOrigin: true,
        })
    );
};
