const config = require('config')

module.exports = function() {
    if(!config.get('jwtPrivateKey')) {
        // we add it through terminal command export vidly_jwtPrivateKey=mySecureKey
        throw new Error('Fatal error: jwtPrivateKey not defined');
    }
}