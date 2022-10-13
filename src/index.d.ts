import { FMScriptOption } from "./main";

export {};

declare global {
  interface Window {
    FileMaker?: {
      PerformScript: (name: string, parameter: string) => void;
      PerformScriptWithOption: (
        name: string,
        parameter: string,
        option: FMScriptOption
      ) => void;
    };
    handleFmWVFetchCallback: (data: any, fetchId: string) => boolean;
  }
}
