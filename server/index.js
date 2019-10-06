const express = require('express');
const router = require('./routes.config.js');
const app = express();

router.routesConfig(app);

app.listen(3000, function() {
    console.log('app listening at port 3000');
})