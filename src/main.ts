import { v4 } from "uuid";

let webViewerName: string;
/**
 * @private
 * set the name of the WebViewer to use for all fetches
 * @param name the Layout Object Name of the FileMaker WebViewer to callback too
 */
function setWebViewerName(name: string) {
  webViewerName = name;
}

/**
 * globalSettings
 */
export const globalSettings = {
  /**
   *
   * set the name of the WebViewer to use for all fetches
   * @param name the Layout Object Name of the FileMaker WebViewer to callback too
   */
  setWebViewerName,
};

/**
 * Call a script in FileMaker, and get a response from the script either as a Promise or through a callback
 *
 * @param scriptName the name of the script to call. The script does have to follow conventions (see docs)
 * @param data optional script parameter, it can also just take a string
 */
export function fmFetch(
  scriptName: string,
  data: string | object
): Promise<unknown>;
export function fmFetch(
  scriptName: string,
  data: string | object,
  /**
   * @param cb callback function to call when the script is done
   */
  callback: () => void
): void;
export function fmFetch(
  scriptName: string,
  data: string | object,
  callback?: () => void
) {
  if (callback) {
    return _execScript(scriptName, data, callback);
  } else {
    return new Promise((resolve) => {
      _execScript(scriptName, data, (result) => {
        resolve(result);
      });
    });
  }
}

const cbs: Record<string, any> = {};
window.handleFmWVFetchCallback = function (data: any, fetchId: string) {
  setTimeout(() => {
    const cb = cbs[fetchId];
    delete cbs[fetchId];
    if (!cb) {
      console.error("Callback is missing for fetchId: " + fetchId);
      return;
    }
    try {
      data = JSON.parse(data);
    } catch (e) {}
    cb(data);
  }, 1);
  return true;
};

/**
 * @private
 */
function _execScript(
  scriptName: string,
  data: any,
  cb: (...args: any) => void
) {
  const fetchId = v4();
  cbs[fetchId] = cb;
  const param = {
    data,
    callback: { fetchId, fn: "handleFmWVFetchCallback", webViewerName },
  };
  callFMScript(scriptName, param);
}

/**
 * parses the api results. pretty simple, but it gets at most needs.
 * @param results
 * @deprecated a future version will use @proofgeist/fmdapi package instead
 */
export function handleDataApiResponse(results: any) {
  const { messages, response } = results;
  const code = messages[0].code;
  if (code !== "0" && code !== "401") {
    throw new Error(`FileMaker Error Code: ${code}. ${messages[0].message}`);
  }
  let dataArray = response.data || [];

  return dataArray;
}

/**
 * calls a FileMaker Script without a callback or a promise
 * @param scriptName
 * @param data
 */
export function callFMScript(scriptName: string, data?: string | object) {
  try {
    if (typeof data !== "string") data = JSON.stringify(data);
  } catch (e) {}
  try {
    window.FileMaker.PerformScript(scriptName, data);
  } catch (e) {
    if (!window.FileMaker) {
      throw new Error(
        `Could not call script, '${scriptName}'. 'window.FileMaker' was not available at the time this function was called.`
      );
    }
    throw e;
  }
}

/**
 * calls a FileMaker Script without a callback or a promise using the new Options
 */
export function callFMScriptWithOption(
  scriptName: string,
  data: string | object,
  option: FMScriptOption
) {
  try {
    data = JSON.stringify(data);
  } catch (e) {}
  try {
    window.FileMaker.PerformScriptWithOption(scriptName, data, option);
  } catch (e) {
    if (!window.FileMaker) {
      throw new Error(
        `Could not call script, '${scriptName}'. 'window.FileMaker' was not available at the time this function was called.`
      );
    }
    throw e;
  }
}

export enum FMScriptOption {
  CONTINUE,
  HALT,
  EXIT,
  RESUME,
  PAUSE,
  SUSPEND_AND_RESUME,
}
