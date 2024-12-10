import { useState } from 'react';
import styles from './ChooseWay.module.scss';
import ChooseCard from './components/ChooseCard/ChooseCard';
const ChooseWay = () => {
  const [install, setInstall] = useState<boolean>(false);
  const [empty, setEmpty] = useState<boolean>(false);
  const [clone, setClone] = useState<boolean>(false);

  const installClick = () => {
    setInstall(true);
    setEmpty(false);
    setClone(false);
  };
  const emptyClick = () => {
    setEmpty(true);
    setClone(false);
    setInstall(false);
  };
  const cloneClick = () => {
    setClone(true);
    setInstall(false);
    setEmpty(false);
  };

  return (
    <div className={styles.container}>
      <ChooseCard
        title={'Install WordPress'}
        info={'Install WordPress'}
        active={install}
        onClick={installClick}
      />
      <ChooseCard
        title={'Empty environment'}
        info={'PHP 8.1 without WordPress'}
        active={empty}
        onClick={emptyClick}
      />
      <ChooseCard
        title={'Clone'}
        info={'Select an existing environment end clone it'}
        active={clone}
        onClick={cloneClick}
      />
    </div>
  );
};

export default ChooseWay;
