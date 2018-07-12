const express = require('express');
const path = require('path');
const fs = require('fs');

const swaggerUiAssetPath = require("swagger-ui-dist").getAbsoluteFSPath();

module.exports = function swaggerUi (router, swaggerUrl = 'https://petstore.swagger.io/v2/swagger.json') {

  let html = fs
    .readFileSync(swaggerUiAssetPath + '/index.html', 'utf8')
    .replace("https://petstore.swagger.io/v2/swagger.json", swaggerUrl);

  let assetsFullPath = path.resolve(__dirname, swaggerUiAssetPath);
  let staticOptions = {
    dotfiles: "ignore",
    index: false,
    extensions: ['png', 'js', 'css', 'map']
  };

  router.use(express.static(assetsFullPath, staticOptions));

  const middleware = function (req, res, next) {
    res.send(html)
  };

  return middleware;
};
