const uuid = require('uuid');
const toBoolean = value => {
    if (!value) return false;
    return (value === 'true');
};


const configuration = {
    UUID: uuid.v4(),
    DEVELOPER_MODE: toBoolean(process.env.DEVELOPER_MODE) || false,
    NODE_ENV: process.env.NODE_ENV || 'local',
    NODE_ADMIN_PORT: process.env.ADMIN_PORT || 3069,
    NODE_ROUTING_PORT: process.env.NODE_ROUTING_PORT || 3071,
    LOG_LEVEL: process.env.LOG_LEVEL || 'info',
    LOG_FILE_NAME: process.env.LOG_FILE_NAME || 'encryptanet.log'
};

module.exports = configuration;