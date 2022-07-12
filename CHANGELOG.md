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
- [ErrorHandler](src/helpers/errorHandler.ts)
- [Event Bus by mitt](src/helpers/eventBus.ts)
- [i18n localization](src/localization/index.ts)
- [MathUtil](src/utils/math.util.ts)
- [DateUtil](src/utils/date.util.ts)
- [Styles structure](src/styles)
- [commons](src/common)
  - [AppButton](src/common/AppButton)
  - [App logo](src/common/AppLogo)
  - [App navbar](src/common/AppNavbar)
  - [Collapse](src/common/Collapse)
  - [ErrorMessage](src/common/ErrorMessage)
  - [Icon](src/common/Icon)
  - [Loader](src/common/Loader)
    - [Spinner](src/common/Loader/variants/Spinner)
  - [Modal](src/common/Modal)
  - [NoDataMessage](src/common/NoDataMessage)
  - [Notification](src/common/Notification)
- [Fields](src/fields)
  - [InputField](src/fields/InputField)
- [hooks](src/hooks)
  - [useForm](src/hooks/useForm.ts)
  - [useFormValidation](src/hooks/useFormValidation.ts)
- [Unit tests](vitest.config.ts)

## [1.0.0-rc.0] - 2022-06-30
#### Under the hood changes
- Initiated and setup project

[Unreleased]: https://gitlab.com/lukachi/react-vite-boilerplate/compare/1.0.0-rc.0...main
[1.0.0-rc.0]: https://gitlab.com/lukachi/react-vite-boilerplate/tags/1.0.0-rc.0
