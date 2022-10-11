[fm-webviewer-fetch](README.md) / Exports

# fm-webviewer-fetch

## Table of contents

### Enumerations

- [FMScriptOption](enums/FMScriptOption.md)

### Variables

- [globalSettings](modules.md#globalsettings)

### Functions

- [callFMScript](modules.md#callfmscript)
- [callFMScriptWithOption](modules.md#callfmscriptwithoption)
- [fmFetch](modules.md#fmfetch)
- [handleDataApiResponse](modules.md#handledataapiresponse)

## Variables

### globalSettings

• `Const` **globalSettings**: `Object`

globalSettings

#### Type declaration

| Name | Type |
| :------ | :------ |
| `setWebViewerName` | (`name`: `string`) => `void` |

#### Defined in

[main.ts:16](https://github.com/proofgeist/fm-webviewer-fetch/blob/df4d8ef/src/main.ts#L16)

## Functions

### callFMScript

▸ **callFMScript**(`scriptName`, `data?`): `void`

calls a FileMaker Script without a callback or a promise

#### Parameters

| Name | Type |
| :------ | :------ |
| `scriptName` | `string` |
| `data?` | `string` \| `object` |

#### Returns

`void`

#### Defined in

[main.ts:106](https://github.com/proofgeist/fm-webviewer-fetch/blob/df4d8ef/src/main.ts#L106)

___

### callFMScriptWithOption

▸ **callFMScriptWithOption**(`scriptName`, `data`, `option`): `void`

calls a FileMaker Script without a callback or a promise using the new Options

#### Parameters

| Name | Type |
| :------ | :------ |
| `scriptName` | `string` |
| `data` | `string` \| `object` |
| `option` | [`FMScriptOption`](enums/FMScriptOption.md) |

#### Returns

`void`

#### Defined in

[main.ts:128](https://github.com/proofgeist/fm-webviewer-fetch/blob/df4d8ef/src/main.ts#L128)

___

### fmFetch

▸ **fmFetch**(`scriptName`, `data`, `callback?`): `void` \| `Promise`<`any`\>

Call a script in FileMaker, and get a response from the script either as a Promise or through a callback

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scriptName` | `string` | the name of the script to call. The script does have to follow conventions (see docs) |
| `data` | `string` \| `object` | optional script parameter, it can also just take a string |
| `callback?` | () => `void` | optional callback function |

#### Returns

`void` \| `Promise`<`any`\>

if no callback is passed it will return a Promise

#### Defined in

[main.ts:33](https://github.com/proofgeist/fm-webviewer-fetch/blob/df4d8ef/src/main.ts#L33)

___

### handleDataApiResponse

▸ **handleDataApiResponse**(`results`): `any`

parses the api results. pretty simple, but it gets at most needs.

#### Parameters

| Name | Type |
| :------ | :------ |
| `results` | `any` |

#### Returns

`any`

#### Defined in

[main.ts:90](https://github.com/proofgeist/fm-webviewer-fetch/blob/df4d8ef/src/main.ts#L90)
