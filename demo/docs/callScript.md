---
sidebar_position: 4
---

# Using callFMScript
If you want to simply call a FileMaker script and you don't need any data back, you can use the `callFMScript` helper function.

```ts
import { callFMScript } from "@proofgeist/fm-webviewer-fetch"
```

Then call the function like so
```ts
callFMScript("scriptName", { param1: "value1", param2: "value2" })
```
The script parameter is passed as the second parameter and can be a JSON object or a string. The parameter will automatically be stringified on its way to FileMaker.

## Calling Script with Options
You can optionally pass a third parameter to specify how the script should run. The options are:
- Continue
- Halt
- Exit
- Resume
- Pause
- Suspend and Resume

As a helper method, you can import these values from the package and reference them by name:

```ts
import { callFMScript, FMScriptOption } from "@proofgeist/fm-webviewer-fetch"

FMScriptOption.CONTINUE // 0
FMScriptOption.HALT // 1
// etc...

callFMScript("scriptName", {}, FMScriptOption.RESUME)
```



See the [Claris documentation](https://help.claris.com/en/pro-help/content/options-for-starting-scripts.html) for more details about each option.