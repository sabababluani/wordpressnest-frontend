import { Select } from 'antd';
import React, { useState } from 'react';
import styles from './DailyBackupSelect.module.scss';

const provinceData: string[] = ['Restore To', 'Bondo'];

const DailyBackupSelect: React.FC = () => {
  const [, setSelectedProvince] = useState<string>(provinceData[0]);

  const handleProvinceChange = (value: string): void => {
    setSelectedProvince(value);
  };

  return (
    <div className={styles.wrapper}>
      <Select
        defaultValue={provinceData[0]}
        style={{ width: 120 }}
        onChange={handleProvinceChange}
        options={provinceData.map((province) => ({
          label: province,
          value: province,
        }))}
      />
    </div>
  );
};

export default DailyBackupSelect;
