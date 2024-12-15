import { useEffect, useState } from 'react';
import SecondStepFlowsCheckbox from '../SecondStepFlowFirstContainer/SecondStepFlowFirstContainer';
import styles from './StepFlowSecond.module.scss';
import Cookies from 'js-cookie';
import { ActivedCheckboxNum } from '../../interface/ActivedCheckboxNum-interface';

const StepFlowSecond = (props: ActivedCheckboxNum) => {
  const [activeCheckbox, setActiveCheckbox] = useState<number | undefined>(
    Number(Cookies.get('SecondStepsSpecificCheckbox')) || 1
  );

  useEffect(() => {
    props.activedCheckboxNum(activeCheckbox);
  }, [activeCheckbox]);

  const handleCheckboxClick = (index: number | undefined) => {
    setActiveCheckbox(index? index: undefined);
    Cookies.set('SecondStepsSpecificCheckbox', index ? index.toString(): JSON.stringify(undefined));
  };

  return (
    <div className={styles.mainWrapper}>
      <SecondStepFlowsCheckbox
        onClick={handleCheckboxClick}
        mainCaption="Migrate from another host"
        description="Moving your site from your previous hosting provider to your Hosting account."
        activeCheckbox={activeCheckbox}
        firstCheckboxCoefficient={1}
      />
      <SecondStepFlowsCheckbox
        onClick={handleCheckboxClick}
        mainCaption="Migrate from backup"
        description="We can migrate your site using several different backup sources and formats."
        activeCheckbox={activeCheckbox}
        secondCheckboxCoefficient={2}
        buttonActive
      />
    </div>
  );
};

export default StepFlowSecond;
