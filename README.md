# sample-angular

Angular sample with [Axioms](https://axioms.io) authentication using `web-js` SDK.


## Clone or download this repo
```
git clone git@github.com:axioms-io/sample-angular.git
cd sample-react
```

Make sure to update the origin.

```
git remote set-url origin new.git.url/here
```

## Install dependencies
```
npm install
```

## Update config
Rename `sample-config.json` to `config.json` and update following settings.

- `Your-App-Domain` is where you going to host or run your app. It can be `localhost` or a domain
- `Your_Client_ID` is your client id which can be obtained from the Axioms Dashboard -> Clients section
- `<Your_Slug>.axioms.io` is your Axioms tenant default domain or custom domain mapped to Axioms servers

```
{
    "axioms_domain": "<Your_Slug>.axioms.io",
    "redirect_uri": "https://<Your-App-Domain>/callback",
    "post_logout_uri": "http://localhost:4200/login",
    "client_id": "https://<Your-App-Domain>/login",
    "response_type": "code",
    "scope": "openid profile"
}
```

## Enable crypto-js
In root of your Angular project create `enable-crypto.js` and add following,

```
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
```

## Update scripts
Update `scripts` section of your `package.json`,

```
    "scripts": {
        "ng": "ng",
        "start": "node enable-crypto.js && ng serve",
        "build": "node enable-crypto.js && ng build",
        "test": "ng test",
        "lint": "ng lint",
        "e2e": "ng e2e"
    },
```

### Compile and hot-reload for local development

```
npm start
```

### Compile and minify for production

## Build

Run `npm run-script build` or `npm run-script build --prod` to build the project.

## Build and deploy to Netlify

1. Simply fork this repository and add your configuration file `config.json` in root of this project.
   
2. Connect your Github project in Netlify and configure build and deploy for your site and you are good to go.