var winston = require('winston');
var ExtraConsole = require('../lib');
var moment =require('moment');

var logger = new (winston.Logger)({
    transports: [
        new (ExtraConsole)({
            timestamp: function() {
                return moment(Date.now()).format('YYYY-MM-DD HH:mm:ss.SSS').grey;
            },
            level: 'info',
            colorize: true,
            prettyPrint: true,
            handleExceptions: true
        })
    ]
});

logger.info('Data to log.');
logger.error('test error');