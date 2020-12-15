## Constants

<dl>
<dt><a href="#globalSettings">globalSettings</a></dt>
<dd><p>globalSettings</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#fetch">fetch(scriptName, [parameter], [callback])</a> ⇒ <code>Promise</code></dt>
<dd><p>Call a script in FileMaker, and get a response from the script either as a Promise or through a callback</p>
</dd>
<dt><a href="#handleDataApiReponse">handleDataApiReponse(results)</a></dt>
<dd><p>parses the api results. pretty simple, but it gets at most needs.</p>
</dd>
<dt><a href="#callFMScript">callFMScript(scriptName, data)</a></dt>
<dd><p>calls a FileMaker Script without a callback or a promise</p>
</dd>
</dl>

<a name="globalSettings"></a>

## globalSettings
globalSettings

**Kind**: global constant  

* [globalSettings](#globalSettings)
    * [.setWebViewerName](#globalSettings.setWebViewerName)
    * [.setDebug](#globalSettings.setDebug)

<a name="globalSettings.setWebViewerName"></a>

### globalSettings.setWebViewerName
set the name of the WebViewer to use for all fetches

**Kind**: static property of [<code>globalSettings</code>](#globalSettings)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | the Layout Object Name of the FileMaker WebViewer to callback too |

<a name="globalSettings.setDebug"></a>

### globalSettings.setDebug
silliness around debug and rollup
just trying to hack in support

**Kind**: static property of [<code>globalSettings</code>](#globalSettings)  

| Param | Type | Description |
| --- | --- | --- |
| the | <code>function</code> | debug function |

<a name="fetch"></a>

## fetch(scriptName, [parameter], [callback]) ⇒ <code>Promise</code>
Call a script in FileMaker, and get a response from the script either as a Promise or through a callback

**Kind**: global function  
**Returns**: <code>Promise</code> - if no callback is passed it will return a Promise  

| Param | Type | Description |
| --- | --- | --- |
| scriptName | <code>string</code> | the name of the script to call. The script does have to follow conventions (see docs) |
| [parameter] | <code>object</code> | optional script parameter, it can also just take a string |
| [callback] | <code>function</code> | optional callback function |

<a name="handleDataApiReponse"></a>

## handleDataApiReponse(results)
parses the api results. pretty simple, but it gets at most needs.

**Kind**: global function  

| Param | Type |
| --- | --- |
| results | <code>\*</code> | 

<a name="callFMScript"></a>

## callFMScript(scriptName, data)
calls a FileMaker Script without a callback or a promise

**Kind**: global function  

| Param | Type |
| --- | --- |
| scriptName | <code>string</code> | 
| data | <code>object</code> | 

