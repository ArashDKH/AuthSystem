const config = {};
config.PORT = process.env.PORT || '8080';
config.MONGODB_URL = 'mongodb://localhost/Weblog';

module.exports = config;