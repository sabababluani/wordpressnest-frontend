import Cpanelbackup from '../components/Cpanelbackup/Cpanelbackup';
import Duplicator from '../components/Duplicator/Duplicator';
import ExistingFile from '../components/ExistingFile/ExistingFile';
import LinkToFiles from '../components/LinkToFiles/LinkToFiles';
import ManageWP from '../components/ManageWP/ManageWP';
import ZipOrFilesAndDatabase from '../components/ZipOrFilesAndDatabase/ZipOrFilesAndDatabase';
import { BackupOptions } from '../interfaces/backupOptions-interface';

export const BACKUP_OPTIONS: BackupOptions[] = [
  { value: 'duplicator', label: 'Duplicator', component: Duplicator },
  { value: 'managewp', label: 'ManageWP', component: ManageWP },
  {
    value: 'ziporfilesanddatabase',
    label: 'Zip or files and database',
    component: ZipOrFilesAndDatabase,
  },
  { value: 'cpanelbackup', label: 'Cpanel backup', component: Cpanelbackup },
];

export const BACKUP_OPTIONS2: BackupOptions[] = [
  {
    value: 'uploadtoexistinghostingfile',
    label: 'Upload to an existing hosting site',
    component: ExistingFile,
  },
  {
    value: 'linktofiles',
    label: 'Link to files (Dropbox, Google Drive, Box.net)',
    component: LinkToFiles,
  },
];
