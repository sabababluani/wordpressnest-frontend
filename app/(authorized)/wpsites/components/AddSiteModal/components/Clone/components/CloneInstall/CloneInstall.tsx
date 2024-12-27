import React, { useState } from 'react';
import styles from './CloneInstall.module.scss';
import { Select, Checkbox } from 'antd';
import { dummyClone } from '../../dummy-clone/dummy-clone';
import Steper from '../../../Steper/Steper';

interface CloneInstallProps {
  currentStep: number; // Expect currentStep as a prop
  onStepChange: (step: number) => void; // Expect onStepChange as a prop
}

const CloneInstall: React.FC<CloneInstallProps> = ({
  currentStep,
  onStepChange,
}) => {
  const [selectState, setSelectState] = useState<string>(dummyClone[0].value);
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({
    cdn: false,
    edgeCaching: false,
  });

  const onSelectChange = (value: string) => {
    setSelectState(value);
  };

  const onCheckboxChange = (key: string, checked: boolean) => {
    setCheckedItems((prev) => ({
      ...prev,
      [key]: checked,
    }));
  };

  // Handle "Back" button click
  const handleBack = () => {
    onStepChange(Math.max(currentStep - 1, 1)); // Update step in parent
  };

  // Handle "Continue" button click
  const handleContinue = () => {
    onStepChange(currentStep + 1); // Update step in parent
  };

  return (
    <div className={styles.container}>
      <div className={styles.cloneWrapper}>
        <span className={styles.headline}>Environment to clone</span>
        <div className={styles.selectWrapper}>
          <Select
            onChange={onSelectChange}
            className={styles.cloneStyle}
            value={selectState}
            options={dummyClone}
          />
          <Select
            onChange={onSelectChange}
            className={styles.miniCloneStyle}
            value={selectState}
            options={dummyClone}
          />
        </div>
      </div>
      <div className={styles.infoWrapper}>
        <div className={styles.info}>
          <span className={styles.headline}>Site name</span>
          <span className={styles.text}>
            This name is only visible in hosting
          </span>
        </div>
        <input type="text" className={styles.input} placeholder="New Site" />
      </div>
      <div className={styles.infoWrapper}>
        <Select
          onChange={onSelectChange}
          className={styles.selectStyle}
          value={selectState}
          options={dummyClone}
        />
      </div>
      <div className={styles.chooseWrapper}>
        <span className={styles.headline}>
          Performance improvements enabled by default
        </span>
        <div className={styles.optionsWrapper}>
          <div className={styles.checkboxWrapper}>
            <div className={styles.checkbox}>
              <Checkbox
                checked={checkedItems.cdn}
                onChange={(e) => onCheckboxChange('cdn', e.target.checked)}
              />
            </div>
            <div className={styles.checkboxContent}>
              <span className={styles.title}>CDN</span>
              <span className={styles.description}>
                Serves website files from hundreds of servers worldwide,
                increasing performance by as much as 40%
              </span>
            </div>
          </div>
          <div className={styles.checkboxWrapper}>
            <div className={styles.checkbox}>
              <Checkbox
                checked={checkedItems.edgeCaching}
                onChange={(e) =>
                  onCheckboxChange('edgeCaching', e.target.checked)
                }
              />
            </div>
            <div className={styles.checkboxContent}>
              <span className={styles.title}>Edge Caching</span>
              <span className={styles.description}>
                Dynamically generates HTML content of your site, improving
                website speed by up to 45%
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.steper}>
        <Steper
          click={currentStep}
          onBack={handleBack}
          onContinue={handleContinue}
        />
      </div>
    </div>
  );
};

export default CloneInstall;
