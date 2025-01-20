export interface EnableExternalBackendPropsInterface {
  bucket: string;
  accessKey: string;
  accessSecretKey: string;
  // createSubfolder: boolean;
  files: boolean;
  database: boolean;
  uploadFrequency: string;
}
