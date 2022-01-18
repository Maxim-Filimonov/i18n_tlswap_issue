## Issue

```
  TLSWRAP

      18 |     .use(Locize)
      19 |     .use(LanguageDetector)
    > 20 |     .init(options)
         |      ^
      21 |     .then(() => i18next);
      22 |
      23 | exports.plugin = {

      at I18n.init (node_modules/i18next/dist/cjs/i18next.js:2350:9)
      at init (plugin.js:20:6)
      at Object.register (plugin.js:25:24)
      at plugin.test.js:19:18
      at TestScheduler.scheduleTests (node_modules/@jest/core/build/TestScheduler.js:333:13)
      at runJest (node_modules/@jest/core/build/runJest.js:404:19)
      at _run10000 (node_modules/@jest/core/build/cli/index.js:320:7)
      at runCLI (node_modules/@jest/core/build/cli/index.js:173:3)
```

## Setup

```
yarn

```

## To Replicate

```
yarn test
```
