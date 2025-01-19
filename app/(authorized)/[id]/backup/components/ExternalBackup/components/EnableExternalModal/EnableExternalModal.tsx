import styles from './EnableExternalModal.module.scss';
import { useForm } from 'react-hook-form';
import { EnableExternalModalPropsInterface } from './interfaces/enable-externl-modal-props.interface';
import { createData } from '@/app/api/crudService';
import { EnableExternalBackendPropsInterface } from './interfaces/enable-external-modal-backend-props.interface';
import ExternalModalSteper from './components/ExternalModalSteper/ExternalModalSteper';
import ExternalFirstStepForm from './components/ExternalFirstStepForm/ExternalFirstStepForm';
import ExternalSecondStepForm from './components/ExternalSecondStepForm/ExternalSecondStepForm';
import ExternalThirdStepForm from './components/ExternalThirdStepForm/ExternalThirdStepForm';
import { useExternalSteper } from './hooks/useExternalSteper';
import ModalHeader from '@/app/components/ModalHeader/ModalHeader';

const EnableExternalModal = (props: EnableExternalModalPropsInterface) => {
  const { steper, steps, setSteper } = useExternalSteper();
  const { register, handleSubmit, watch, setValue } =
    useForm<EnableExternalBackendPropsInterface>({
      defaultValues: {
        bucket: '',
        accessKey: '',
        accessSecretKey: '',
        createSubfolder: false,
        files: false,
        database: false,
        uploadFrequency: 'monthly',
      },
    });

  const onSubmit = async (data: EnableExternalBackendPropsInterface) => {
    try {
      await createData('backup/manualtos3', data);
      props.onClose();
    } catch (error) {
      console.log('Error submitting data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ModalHeader
        onClose={props.onClose}
        headline={'Enable external backups'}
      />
      <div className={styles.containerWrapper}>
        <ExternalModalSteper steps={steps} />
        {steper === 1 && (
          <ExternalFirstStepForm
            register={register}
            watch={watch}
            setValue={setValue}
            onCancel={props.onClose}
            onNext={() => setSteper(2)}
          />
        )}
        {steper === 2 && (
          <ExternalSecondStepForm
            watch={watch}
            setValue={setValue}
            onCancel={() => setSteper(1)}
            onNext={() => setSteper(3)}
          />
        )}
        {steper === 3 && (
          <ExternalThirdStepForm
            onCancel={() => setSteper(2)}
            onConfirm={handleSubmit(onSubmit)}
          />
        )}
      </div>
    </form>
  );
};

export default EnableExternalModal;
