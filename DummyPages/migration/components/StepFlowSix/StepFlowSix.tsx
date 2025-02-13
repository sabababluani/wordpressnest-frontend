import InputLabelContainer from './components/InputLabelContainer/InputLabelContainer';
import styles from './StepFlowSix.module.scss';

const StepFlowSix = () => {
  return (
    <div className={styles.mainWrapper}>
      <InputLabelContainer
        mainCaption={'Introduction'}
        mainSecondCaption={'Migration type'}
        lastMainCaption="As soon as possible"
        lastMainCaptionActive
      />
      <InputLabelContainer
        mainCaption={'Migration source'}
        mainSecondCaption={'Migrate from another host'}
      />

      <InputLabelContainer
        withSequence
        mainCaption={'Hosting details'}
        firstColumnsTopCaption={'Current host'}
        firstColumnsBottomCaption={'Other'}
        secondColumnsTopCaption={'Hosting panel login URL'}
        secondColumnsBottomCaption={'rero.com'}
        thirdColumnsTopCaption={'Hosting panel username'}
        thirdColumnsBottomCaption={'mikheilpailodze@gmail.com'}
        fourthColumnsTopCaption={'Hosting panel password'}
        fourthColumnsBottomCaption={'XM••••z7'}
      />

      <InputLabelContainer
        withSequence
        mainCaption={'Site details'}
        firstColumnsTopCaption={'Domain name'}
        firstColumnsBottomCaption={'Other'}
        secondColumnsTopCaption={'WordPress admin URL'}
        secondColumnsBottomCaption={'rero.com'}
        thirdColumnsTopCaption={'WordPress usernames'}
        thirdColumnsBottomCaption={'mikheilpailodze@gmail.com'}
        fourthColumnsTopCaption={'WordPress password'}
        fourthColumnsBottomCaption={'XM••••z7'}
        secondSequence
        secondSequenceFirstColumnTopCaption={'Bedrock, Trellis'}
        secondSequenceFirstColumnBottomCaption={'No'}
        secondSequenceSecondColumnTopCaption={'eCommerce'}
        secondSequenceSecondColumnBottomCaption={'No'}
        secondSequenceThirdColumnTopCaption={'Multisite'}
        secondSequenceThirdColumnBottomCaption={'No'}
        secondSequenceFourthColumnTopCaption={'Add Wildcard'}
        secondSequenceFourthColumnBottomCaption={'Yes'}
      />

      <InputLabelContainer
        withSequence
        mainCaption={'Hosting settings'}
        firstColumnsTopCaption={'Site name'}
        firstColumnsBottomCaption={'yoo'}
        secondColumnsTopCaption={'Data center to use'}
        secondColumnsBottomCaption={'Dallas US (us-south1)'}
      />
    </div>
  );
};

export default StepFlowSix;
