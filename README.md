## Project setup
```
yarn | yarn install
```

### Compiles and hot-reloads for development
```
yarn start
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Run unit tests
```
yarn test
```

### Lints release/release candidate version
```
yarn rsc %release-version%
```

### Build docker image with version
```
 docker build --no-cache --progress=plain --build-arg BUILD_VERSION=1.0.0-rc.0 -t vue-template .
```
