var winston = require('winston');
var ExtraConsole = require('../lib');


var logger = new (winston.Logger)({
    transports: [
        new (ExtraConsole)({
            level: 'info',
            colorize: 'all',
            prettyPrint: true,
            handleExceptions: true
        })
    ]
});

logger.info('Data to log.');
logger.error('test error');