---
sidebar_position: 3
title: Using fmFetch
---

# fmFetch

The purpose of the fmFetch function is to call a FileMaker script **and** get the result of the FileMaker script back to your web application running in a webviewer. If you don't care about the script result, check out the callFMScript function instead.

To accomplish this, fmFetch wraps the `FileMaker.PerformScript` function injected into the webviewer by FileMaker Pro and assigns each invocation of your fetch with a unique ID. In turn, the FileMaker script that you call must call back into the webviewer with this callback ID and the result of your script.

To see a working example of this, download [this demo file](/fmFetch-demo.fmp12).

## Simple Example

In Javascript...

```ts
import { fmFetch } from "@proofgeist/fm-webviewer-fetch";

async function getData() {
  const result = await fmFetch("GetSimpleResult");
}
```

In FileMaker...  
Script: `GetSimpleResult`

```
# Required properties
Set Variable [ $json ; Value: Get ( ScriptParameter ) ]
Set Variable [ $callback ; Value: JSONGetElement ( $json ; "callback" ) ]
Set Variable [ $webViewerName ; "web" ]

# $result must be an object.
Set Variable [ $result ; Value: JSONSetElement ( "" ; [ "hello" ; "world" ; JSONString ]  ) ]

Set Variable [ $callback ; Value: JSONSetElement ( $callback ; ["result"; $result; JSONObject ]; ["webViewerName"; $webViewerName; JSONString ]) ]
Perform Script [ Specified: From list ; “SendCallBack” ; Parameter: $callback ]
```

The `SendCallback` script, along with a template version of this script is included in the [demo file](/fmFetch-demo.fmp12).

## Passing a Script Parameter

A script parameter can be passed to the fmFetch function as a string or JS object. The script parameter will be passed to the FileMaker script as a string.

```ts
import { fmFetch } from "@proofgeist/fm-webviewer-fetch";

async function getData() {
  const result = await fmFetch("ScriptName", {
    param1: "value1",
    param2: "value2",
  });
}
```

Then simply parse out the script parameter via the `data` key in your FileMaker script.

```
Set Variable [ $json ; Value: Get ( ScriptParameter ) ]
Set Variable [ $callback ; Value: JSONGetElement ( $json ; "callback" ) ]
Set Variable [ $data ; Value: JSONGetElement ( $json ; "data" ) ]
```

## Using Callbacks

You can also use a callback function instead of a promise by passing a callback function as the third parameter to the fmFetch function.

```ts
function getData() {
  fmFetch("GetSimpleResult", {}, (result) => {
    console.log(result);
  });
}
```

## TypeScript Support

If you want to directly type the result of your FileMaker script, you can pass a type to the fmFetch function.

```ts
type Result = {
  hello: string;
};

async function getData() {
  const result = await fmFetch<Result>("GetSimpleResult");
}
```

**WARNING:** This type is not validated with the actual FileMaker script result. You may want to consider validating the data that is returned from FileMaker with a runtime validation library such as [zod](https://zod.dev). This technique is most powerful when combined with the `Execute FileMaker Data API` script step and automatic type generation found in the [@proofgeist/fmdapi](https://github.com/proofgeist/fmdapi) package. [Learn more](/fmdapi).
