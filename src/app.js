require('module-alias/register');
require('./lib/global'); // global context patching

const log = en.createLog('app');
const router = require('./lib/services/router');


router.start();