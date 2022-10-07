/**
 * Global context injection
 * 
 */

require('dotenv').config();

const chalk = require('chalk');
const config = require('./config');
const wrap = require('./async-exec-wrapper');
const devcode = require('./devmode');
const { createLogContext } = require('./logger');

const log = createLogContext('global');
// TODO: before shutdown event handler

//


const context = {
    config,
    devcode,
    wrap,
    createLog: createLogContext,
};

if (config.NODE_ENV === 'production' && config.DEVELOPER_MODE) {
    log.error(
        `
        ${chalk.red('!!! D A N G E R !!!')}
        ${chalk.red.bold('DEVELOPER_MODE')} is enabled in Production!
        Hackers gonna hack, and you don't want that.
        Exited with error code.`
    )
    return process.exit(1);
}

global.en = context;
