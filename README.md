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
Add `.env` in project root to add following configs. If you are using Netlify for deployment and build you can use their environment variables (see Netlify details at the end).

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

We recommend to use `code` response type (Authorization code flow with PKCE). For more supported response type options please review  `web-js` documentation.

### Compile and hot-reload for local development

```
ng serve
```


### Compile and minify for production

Build using `.env`

```
ng build --prod
```

## Build and deploy to Netlify

1. Simply fork this repository and connect your Github project in Netlify.

2. Configure your build command and output directory and you are good to go.


### Build Settings
Build command: `ng build` or `ng build --prod`

Publish directory: `build/sample-angular`

![Build settings](build_settings.jpg)

### Environment Settings
![Build Environment settings](build_env_settings.jpg)