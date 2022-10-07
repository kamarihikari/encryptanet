const moment = require('moment');
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf, splat, simple, json } = format;
const { NODE_ENV, LOG_LEVEL, LOG_FILE_NAME } = require('./config');

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `[${moment(timestamp).toLocaleString()}][${label}] ${level}: ${message}`;
});

const defaultTransports = [
  new transports.Console(),
];

const isProd = NODE_ENV === 'production';

let transportsForLogWriting = [];

if (isProd) {
  transportsForLogWriting = [
    new transports.Console(),
    new transports.File({ filename: 'error.log', level: 'error' }),
    new transports.File({ filename: LOG_FILE_NAME, level: LOG_LEVEL }),
  ];
}

function createLogContext(context = '*') {
  return createLogger({
    level: LOG_LEVEL,
    format: combine(
      label({ label: context }),
      timestamp(),
      splat(),
      simple(),
      myFormat
    ),
    transports: isProd ? transportsForLogWriting : defaultTransports
  });
}

module.exports = {
  createLogContext
};