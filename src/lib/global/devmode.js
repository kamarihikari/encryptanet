/**
 * DEVMODE
 * dev code along the way.
 */

const config = require('./config');
const chalk = require('chalk');
const {DEVELOPER_MODE, NODE_ENV, LOG_LEVEL} = config;
const { createLogContext } = require('./logger');
const { error } = createLogContext(chalk.yellow('DEVELOPER_CODE'));

function placeholder() {
    if (NODE_ENV === 'production' || LOG_LEVEL !== 'debug') return;
    return error(
        `

        Attempted to run devcode while ${chalk.yellow.bold('DEVELOPER_MODE')} is not enabled.
        Please set the ${chalk.bold.blue('DEVELOPER_MODE')} environment variable to ${chalk.green('true')}
        `
    );
}

function devcode(fn) {
    try {
        return fn();
    }
    catch(exception) {
        error('DEVELOPER CODE EXCEPTION:')
        console.error(exception)
    }
}



module.exports = DEVELOPER_MODE ? devcode : placeholder;