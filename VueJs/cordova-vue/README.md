# cordova-vue
Cordova combine vue build cross-platform project.

## Install Cordova
See [https://cordova.apache.org](https://cordova.apache.org)

## Install vue
See [https://cn.vuejs.org](https://cn.vuejs.org)

## Get Started

## Checkout code
### Install npm packages
	npm install
	
### /src to /dist/www
	npm run build

### cd dist to execute cordova command
	cd dist

### add platform and build
```
cordova platform add browser # if needed
cordova build browser # or ios, android
```

### Execute on platform
```
cordova run browser # or ios, android
```


## hot reload to debug or unit test
### serve with hot reload at localhost:8080
	npm run dev

### build for production and view the bundle analyzer report
	npm run build --report

### run unit tests
	npm run unit

### run all tests
	npm run units

## the step to init this project
1. vue init webpack cordova-vue
2. cd cordova-vue
3. cordova create dist
4. change build option in /config/index.js

```
index: path.resolve(__dirname, '../dist/www/index.html'),
// Paths
assetsRoot: path.resolve(__dirname, '../dist/www'),
assetsSubDirectory: '',
assetsPublicPath: '',
```

	
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


