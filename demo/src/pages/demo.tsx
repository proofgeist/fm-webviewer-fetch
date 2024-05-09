import React, { useEffect } from "react";
import { fmFetch, FMScriptOption } from "@proofgeist/fm-webviewer-fetch";

export default function Demo() {
  const [fmData, setFmData] = React.useState<any>();
  const loaded = useWrapper();
  if (!loaded) return null


  async function getDataFromFM() {
    const data = await fmFetch("GetSimpleResult", {
      param1: "Hello",
      param2: "World",
    });
    setFmData(data);
  }
  return (
    <div style={{ padding: "20px", display: "grid", gap: "20px" }}>
      <div>
        <h1>fmFetch Example</h1>
        <p>
          Click this button to run a FileMaker script and get the result back
          into this webpage.
        </p>
        <button onClick={getDataFromFM} type="button">
          Fetch Data
        </button>
      </div>

      <div>
        <h3>Name Field Fetched from FileMaker</h3>
        <div>{fmData?.name}</div>
      </div>

      <div>
        <h3>Layout Names Fetched From FileMaker</h3>
        <ul id="layouts">
          {fmData?.layoutNames?.map((layout: any, i:number) => (
            <li key={layout + i}>{layout}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}


// if the urls has a query parameter useWrapper, then the wrapper will be used
// you only need this isf you want to use webdirect
// a hook may not be the best way to do this, but it works for this example
// it might be best to load this in the index.html in a script tag.
// and certainly if you aren't using react, you
function useWrapper() {
  const [loaded, setLoaded] = React.useState<boolean>(false);
  
  useEffect(() => {
    if(loaded) return;
  
    const urlParams = new URLSearchParams(window.location.search);
    const useWrapper = urlParams.get("useWrapper");
     if(useWrapper) {

        //add the FileMaker object since there won't be one if the wrapper is used.
        if(window.FileMaker) return;
        window.FileMaker = {
          PerformScriptWithOptions: function (scriptName:string, data: any, options:FMScriptOption){
            let message = {
              forFM: true,
              script: scriptName,
              data: data,
              options: options,
            };
            window.parent.postMessage(message, "*");
          },
          PerformScript: function (scriptName:string, data: any){
            let message = {
              forFM: true,
              script: scriptName,
              data: data
            };
            window.parent.postMessage(message, "*");
          }
        }

        //listen for messages that are passed through the wrapper
        window.addEventListener(
          "message",
          function (e) {
            var data = e.data;
            if(data.functionName === undefined) return;
            const functionName = data.functionName as string;
            const functionData = data.data;
            const fetchId = data.fetchId;
            if(fetchId){
              window[functionName](functionData, fetchId)
            }else{
              window[functionName](functionData);
            }
          },
          false
        );

      }   
      setLoaded(true);
  } , [])

  return loaded

}