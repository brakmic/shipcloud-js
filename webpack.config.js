// retrieve specialized configs from ./config folder
switch (process.env.NODE_ENV) {
  case 'prod':
  case 'production':
    module.exports = require('./config/webpack.api.prod')({env: 'production' });
    break;
  case 'test':
  case 'testing':
    module.exports = require('./config/webpack.api.test')({ env: 'test' });
    break;
  case 'client':
    module.exports = require('./config/webpack.client')({ env: 'client' });
    break;
  case 'dev':
  case 'development':
  default:
    module.exports = require('./config/webpack.api.dev')({ env: 'development' });
}
