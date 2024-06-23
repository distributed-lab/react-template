# Distributed Lab react started template


| command                      | description                             |
|------------------------------|-----------------------------------------|
| `yarn install` / `yarn`      | install dependencies                    |
| `yarn start`                 | start dev server                        |
| `yarn build`                 | build project                           |
| `yarn lint`                  | lint files (eslint + stylelint)         |
| `yarn rsc [release-version]` | Lints release/release candidate version |
|                              |                                         |

### important:
`.env-development` and `.env-production` is the custom solution for CI, which is used to build the app for different environments e.g. staging and production in github workflow files.

Before start development or manual deploy app with `dist` dir - make sure you have copied `.env-[environment]` file in to `.env.[environment]` file, where `[environment]` is the name of the environment, e.g. `.env-production` or `.env-staging` and fulfill it with your own values.

```bash
cp .env-development .env.development
# or
cp .env-production .env.production
```

### Build docker image with version
```dockerfile
 docker build --no-cache --progress=plain --build-arg BUILD_VERSION=1.0.0-rc.0 -t react-template .
```

#### important
docker-compose config works with `.env` file only, so make sure you have it

### Run container
```
docker run -d -p 80:80 --name [container-name] [image-name]
```

## Prepare for deployment
`.env-development` and `.end-production` is a files, which are used to run build in github workflow files, e.g. [here](.github/workflows/main.yml) at line 32

It sets the environment variables for the `vitejs` build, which are called in werf.yaml file `yarn start` command.

After that, docker image could be used to deploy the app

If you want to build app locally, you can copy `.env-production` files and fulfill it with your own values, then run command `yarn build` or `.env-development` for `yarn start` command

### Dealing with env variables
Env variables can be rewritten by [env.is] (./static/env.js) file in runtime. To do so, we need to provide same [env variables](.env.example) there in json format

## Some additional features

### JsonApi lib

[@distributedlab/jac](https://distributed-lab.github.io/web-kit/modules/_distributedlab_jac.html)

### Web3 provider wrapper lib

[@distributedlab/w3p](https://distributed-lab.github.io/web-kit/modules/_distributedlab_w3p.html)

### Utils, tools, helpers, ...etc

[@distributedlab/tools](https://distributed-lab.github.io/web-kit/modules/_distributedlab_tools.html)

## License

This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE) file for details
