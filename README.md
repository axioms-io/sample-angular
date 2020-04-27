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

- `Your-App-Host` is where you going to host or run your app. It can be `localhost` or a domain
- `Your-Client-ID` is your client id which can be obtained from the Axioms Dashboard -> Clients section
- `Your-Axioms-Domain` is your Axioms tenant default domain or custom domain mapped to Axioms servers


```
NG_APP_Client_Id=<Your-Client-ID>
NG_APP_Axioms_Domain=<Your-Axioms-Domain>
NG_APP_Redirect_Uri=https://<Your-App-Host>/callback
NG_APP_Post_Logout_Uri=https://<Your-App-Host>/login
NG_APP_Response_Type=<Your-Response-Type>
NG_APP_Scope=<Your-Scope>
NG_APP_Post_Login_Navigate=<Your-Post-Login-Navigate>
```

We recommend to use `code` response type (Authorization code flow with PKCE). For more supported response type options please review  `web-js` [documentation](https://developer.axioms.io/docs/sdks-samples/use-with-spas/web-js).

Example `.env` file


```
NG_APP_Client_Id=MvnGPGwPJ7DNs0fQLpAr4dhi2PbfuQX1
NG_APP_Axioms_Domain=auth.test-unlimited.com
NG_APP_Redirect_Uri=http://localhost:4200/callback
NG_APP_Post_Logout_Uri=http://localhost:4200/login
NG_APP_Response_Type=code
NG_APP_Scope=openid profile
NG_APP_Post_Login_Navigate=/dashboard
```

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
Simply click following button and provide your `.env` variables,

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/axioms-io/sample-angular"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify" width="200px"></a>

**OR**

1. Fork this repository and connect your Github project in Netlify.

2. Configure your build command and output directory and you are good to go.


### Build Settings
Build command: `ng build` or `ng build --prod`

Publish directory: `build/sample-angular`

![Build settings](build_settings.jpg)

### Environment Settings
![Build Environment settings](build_env_settings.jpg)