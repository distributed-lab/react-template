# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

[Unreleased]
#### Added
- [Eslint](.eslintrc.js)
- [Stylelint](stylelint.config.js)
- [prettier](.eslintrc.js)
- [Vite bundler](vite.config.ts)
- [react-router-dom](src/routes.tsx)
- CI/CD
  - [gitlab-ci](.gitlab-ci.yml)
  - [werf.yaml](werf.yaml)
- [Dockerfile](Dockerfile)
- [nginx.conf](nginx.conf)
- [static dir as public dir](static)
  - [branding static files](static/branding)
  - [styles and files for init-loader](static/init-loader)
  - [noscript files](static/noscript)
- [sanity-check](scripts/release-sanity-check.mjs)
- [ErrorHandler](src/helpers/error-handler.ts)
- [Event Bus by mitt](src/helpers/event-bus.ts)
- [i18n localization](src/localization/index.ts)
- [MathUtil](src/utils/math.util.ts)
- [DateUtil](src/utils/date.util.ts)
- [Styles structure](src/styles)
- [Loader](src/common/Loader)
  - [Spinner](src/common/Loader/variants/Spinner)
- [ErrorMessage](src/common/ErrorMessage)
- [AppButton](src/common/AppButton)
- [App navbar](src/common/AppNavbar)
- [App logo](src/common/AppLogo)
- [Icon](src/common/Icon)
- [Fields](src/fields)
  - [InputField](src/fields/InputField)
- [Collapse](src/common/Collapse)
- [Unit tests](vitest.config.ts)

## [1.0.0-rc.0] - 2022-06-30
#### Under the hood changes
- Initiated and setup project

[Unreleased]: https://gitlab.com/lukachi/react-vite-boilerplate/compare/1.0.0-rc.0...main
[1.0.0-rc.0]: https://gitlab.com/lukachi/react-vite-boilerplate/tags/1.0.0-rc.0
