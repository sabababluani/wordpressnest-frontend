import { Select } from 'antd';
import styles from './Cpanelbackup.module.scss';
import { BackupOptions } from '../../interfaces/backupOptions-interface';
import { useState } from 'react';
import { BACKUP_OPTIONS2 } from '../../dummy_data/backup-options';

const Cpanelbackup = () => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>();
  const [SelectedComponent, setSelectedComponent] =
    useState<React.ComponentType | null>(null);

  const getSelectedComponent: (value: string) => React.ComponentType | null = (
    value: string,
  ) => {
    const selectedOption: BackupOptions | undefined = BACKUP_OPTIONS2.find(
      (option: BackupOptions) => option.value === value,
    );
    return selectedOption?.component || null;
  };

  return (
    <div className={styles.mainContainer}>
      <Select
        value={selectedValue}
        options={BACKUP_OPTIONS2.map(({ value, label }: BackupOptions) => ({
          value,
          label,
        }))}
        className={styles.specificSelect}
        placeholder="Select a backup type"
        onChange={(value: string) => {
          setSelectedValue(value);
          setSelectedComponent(getSelectedComponent(value));
        }}
      />
      {SelectedComponent && <SelectedComponent />}
    </div>
  );
};

export default Cpanelbackup;
