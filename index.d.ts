export {};

declare global {
  interface Window {
    FileMaker?: any;
    handleFmWVFetchCallback?: any;
  }
}
