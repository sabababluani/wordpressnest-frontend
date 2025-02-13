import InputSection from './components/InputSection/InputSection';
import styles from './StepFlowFifth.module.scss';

const StepFlowFifth = () => {
  return (
    <div className={styles.mainWrapper}>
      <InputSection
        mainCaption={'Site name'}
        inputsLabel={
          'Add a unique name to your site. We only use this as an identifier within MyHosting.'
        }
      />
      <InputSection
        mainCaption={'Data center location'}
        inputsLabel={
          'Choose from 37 data centers to place your website in the geographical location closest to your visitors. Boosted regions are data center locations where we have made considerably faster infrastructure available at no extra charge.'
        }
      />
      <InputSection
        enhancedGap={true}
        enhancedInput={true}
        reducedSize={true}
        mainCaption={'Any special instructions?'}
        inputsLabel={
          'Are there any special .htaccess or Nginx rules to be used? Is there anything unique to your site, like a plugin or a custom development that we should watch out for when migrating?'
        }
      />
    </div>
  );
};

export default StepFlowFifth;
