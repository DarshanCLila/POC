/* eslint-disable import/no-dynamic-require */

/**
* get environment variable from process
*/
const env = process.env.NODE_ENV || 'development'; // set NODE_ENV to development if none is provided

/**
* route to appropriate config file according to environment variable
*/
const config = require(`./env/${env}`);


/**
* export config
*/
module.exports = config;
