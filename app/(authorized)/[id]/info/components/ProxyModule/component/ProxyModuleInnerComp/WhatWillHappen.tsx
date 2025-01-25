import styles from './WhatWillHappen.module.scss';

const WhatWillHappen = (props: { caption: string; description: string }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.topContainer}>
        <span className={styles.captionStyle}>{props.caption}</span>
      </div>
      <div className={styles.bottomContainer}>
        <span className={styles.descriptionStyle}>{props.description}</span>
      </div>
    </div>
  );
};

export default WhatWillHappen;
