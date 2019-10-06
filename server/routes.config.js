const ContactController = require('./contact.controller');

const routesConfig = function(app) {
    app.post('/contact', [
        ContactController.email
    ]);
};

module.exports = {
    routesConfig: routesConfig
};