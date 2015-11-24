var winston = require('winston');
var util = require('util');
var path = require('path');

var color = {
    log: 'inverse',
    trace: 'magenta',
    debug: 'green',
    info: 'cyan',
    warn: 'yellow',
    error: 'red'
};

winston.addColors(color);

function showLineInfo() {
    var stack = (new Error()).stack.split('\n').slice(3);
    var s = stack[6],
        sp = /at\s+(.*)\s+\((.*):(\d*):(\d*)\)/gi.exec(s) || /at\s+()(.*):(\d*):(\d*)/gi.exec(s);
    var data = {};
    if (sp.length === 5) {
        data.method = sp[1];
        data.path = sp[2];
        data.line = sp[3];
        data.pos = sp[4];
        data.file = path.basename(data.path);
        data.msg = (' at ' + data.path.replace(process.__basePath + '/', '') + ((':' + data.line) || '') + ((':' + data.pos) || '') + ' ' + (data.method || ''));
    }
    return data;
}

var ExtraConsole = module.exports = function(options) {
    this.name = 'ExtraConsole';
    winston.transports.Console.apply(this, arguments);
}

util.inherits(ExtraConsole, winston.transports.Console);

ExtraConsole.prototype.log = function(level, msg, meta, callback) {
    var data = showLineInfo();
    winston.transports.Console.prototype.log.call(this, level, msg + data.msg, meta || '', callback || '');
};
