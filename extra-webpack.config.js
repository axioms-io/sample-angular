const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
    node: {
        crypto: true,
        stream: true
    },
    plugins: [
        new Dotenv({
            path: './.env', // Path to .env file (this is the default)
            safe: true // load .env.example (defaults to "false" which does not use dotenv-safe)
        }),
        new webpack.EnvironmentPlugin(['NG_APP_Client_Id', 'NG_APP_Axioms_Domain', 'NG_APP_Redirect_Uri', 'NG_APP_Post_Logout_Uri', 'NG_APP_Response_Type', 'NG_APP_Scope', 'NG_APP_Post_Login_Navigate'])
    ]
}