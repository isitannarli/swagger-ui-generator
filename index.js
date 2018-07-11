const express = require('express');
const path = require('path');
const pug = require('pug');

module.exports = function swaggerUi(router, swaggerUrl = 'https://petstore.swagger.io/v2/swagger.json') {

    const swaggerInstans = `window.onload = function() {
            const ui = SwaggerUIBundle({
                url: '${swaggerUrl}',
                dom_id: '#swagger-ui',
                deepLinking: true,
                presets: [
                    SwaggerUIBundle.presets.apis,
                    SwaggerUIStandalonePreset
                ],
                plugins: [
                    SwaggerUIBundle.plugins.DownloadUrl
                ],
                layout: 'StandaloneLayout'
            })
            window.ui = ui
        }`;

    const html = pug.renderFile(__dirname + '/template.pug', {
        swaggerInstans: swaggerInstans
    });

    router.use(express.static(path.resolve(__dirname, 'static')));

    const middleware = function (req, res, next) {
        res.send(html)
    };

    return middleware;
};
