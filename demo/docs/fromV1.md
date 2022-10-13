---
sidebar_position: 2
---

# Upgrading from v1

Version 2.0 has a few breaking changes, but upgrading is easy.

### New package name
The package has moved from `fm-webviewer-fetch` to `@proofgeist/fm-webviewer-fetch`. If you are using the old pacakge name, you will need to remove it and install the new package.

### Changed fetch to fmFetch
The `fetch` function has been renamed to `fmFetch` to avoid conflicts with the native browser `fetch` function. If you are using the old `fetch` function, simply rename it to `fmFetch` in your import statement, or choose another name if you prefer.

```ts
// for backwards compatibility with existing code
import { fmFetch as fetch } from '@proofgeist/fm-webviewer-fetch'
```


### Deprecated `callFmScriptWithOption`
You can now use the `callFMScript` function with or without an option as the 3rd parameter.

```ts
// old way
import { callFMScriptWithOption } from 'fm-webviewer-fetch'
callFMScriptWithOption('scriptName', 'scriptParam', 3)

// new way
import { callFMScript, FMScriptOption } from '@proofgeist/fm-webviewer-fetch'
callFMScript('scriptName', 'scriptParam', FMScriptOption.RESUME)
```
Note that the old function will still work, but may be removed in a future release.