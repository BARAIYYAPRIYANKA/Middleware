
const morgan = require('morgan');

const logger = morgan(':date[iso] :method :url :remote-addr');

module.exports = logger;
