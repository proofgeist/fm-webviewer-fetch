---
sidebar_position: 1
---
# Getting Started


## Purpose of this package

The goal of this package is to make it easy to work with FileMaker data when building a custom webviewer integration. `fm-webviewer-fetch` works **only inside of webviewer** and allows you to interact with your FileMaker solution via local scripts.

For web-based applications where you're looking to interact with the Data API, check out the [@proofgeist/fmdapi](https://github.com/proofgeist/fmdapi) package instead.

## Preqrequisites
This package works with any Javascript framework or no framework at all, but you'll probably need a build system to help you deploy the code into your FileMaker solution. If you're just getting started, check out the [Javascript Development Environment for FileMaker](https://github.com/proofgeist/js-dev-environment).

Keep in mind that you can use this packaged to code deployed to a hosted website as well, as long as FileMaker loads that website into a webviewer.


## Installation
Install via your favorite package manager

```bash
npm install @proofgeist/fm-webviewer-fetch
```
```bash
yarn add @proofgeist/fm-webviewer-fetch
```

then import into your project
```ts
import { fmFetch } from '@proofgeist/fm-webviewer-fetch'
```