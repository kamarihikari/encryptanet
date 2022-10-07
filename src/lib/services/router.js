/**
 * Routing service
 * listens on routing port (UDP) for node-to-node communication
 */

const { createSocket }= require('dgram');
const { NODE_ROUTING_PORT } = en.config;
const log = en.createLog('services/router');

let router;


function stop() {}

function start() {
    router = createSocket('udp4');
    router.on('listening', () => {
        log.info(`listening on port ${NODE_ROUTING_PORT}`);
    });
    
    router.on('error', log.error);
    router.on('message', () => {
        // parse message 
    });
    
    
    router.bind(NODE_ROUTING_PORT);
}

module.exports = {
    start,
    stop
};