import React from "react";
import { fmFetch } from "@proofgeist/fm-webviewer-fetch";

export default function Demo() {
  const [fmData, setFmData] = React.useState<any>();

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
          {fmData?.layoutNames?.map((layout: any) => (
            <li>{layout}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
