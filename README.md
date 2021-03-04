# britecore-frontend

## Project setup
```
npm install
```
Make sure to create an .env for serving the app locally and .env.production for serving the app in production in the project folder. Add `VUE_APP_BASE_URL` for the base_url of the api backend and `VUE_APP_TITLE` for the title of the app.  

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Steps to deploy to AWS S3

* Install [AWS Command Line Interface](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-windows.html).

* Create a bucket in S3 on AWS

* Modify the bucket and goto properties, goto static website hosting  and enable it. Note the url given.

* Check package.json and edit the `s3_name` to yours

* To deploy to aws, run `npm run deploy`
