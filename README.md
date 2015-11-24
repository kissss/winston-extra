# winston-extra

A extra console for winston


## Usage
``` js
var winston = require('winston');

var ExtraConsole = require('winston-extra');

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
```


## Installation

### Installing npm (node package manager)

``` bash
  $ curl http://npmjs.org/install.sh | sh
```

### Installing winston-redis

``` bash
  $ npm install winston
  $ npm install winston-extra
```

## Example


 ![image](http://7xom0s.com1.z0.glb.clouddn.com/winston-extra-example.jpg)