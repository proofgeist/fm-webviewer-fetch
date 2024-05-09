interface Window {
  handleFmWVFetchCallback: (data: any, fetchId: string) => boolean;
  FileMaker : {
    PerformScript: (scriptName: string, data: any, options: FMScriptOption) => void;
  }
}
