// Refer 
// https://github.com/iden3/snarkjs/issues/17
// https://stackoverflow.com/questions/51087330/angular-6-many-cant-resolve-errors-crypto-fs-http-https-net-path-stream

const fs = require('fs');
const f = 'node_modules/@angular-devkit/build-angular/src/angular-cli-files/models/webpack-configs/browser.js';

fs.readFile(f, 'utf8', function(err, data) {
    if (err) {
        return console.log(err);
    }
    var result = data.replace(/node: false/g, 'node: {crypto: true, stream: true}');

    fs.writeFile(f, result, 'utf8', function(err) {
        if (err) return console.log(err);
    });
});