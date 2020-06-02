const winston = require('winston');
// require('winston-mongodb');
require('express-async-errors'); // used for logging errors check error.js

module.exports = function() {
    // handle uncaughtExceptions
    process.on('uncaughtException', (ex) => {
        winston.error(ex.message, ex);
        process.exit(1);
    });

    // handle unhandledRejection
    process.on('unhandledRejection', (ex) => {
        winston.error(ex.message, ex);
        process.exit(1);
    });

    winston.add(winston.transports.File, {filename: 'logfile.log'}); // add errors to logfile.
    // winston.add(winston.transports.MongoDB, {db: 'mongodb://localhost/vidly'}); // add errors to mongodb.
}