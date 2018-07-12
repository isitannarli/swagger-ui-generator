### Swagger UI Generator for Express

#### Installation

```
npm install --save swagger-ui-generator
```

#### Usage

```
const express = require('express');
const swaggerUIGenerator = require('swagger-ui-generator');

const app = express();

const swaggerUrl = 'https://petstore.swagger.io/v2/swagger.json';

app.use('/swagger', swaggerUIGenerator(app, swaggerUrl));

app.listen(3000);

```
