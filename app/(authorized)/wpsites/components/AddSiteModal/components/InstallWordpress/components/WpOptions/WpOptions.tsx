import { Checkbox, Select } from 'antd';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import styles from './WpOptions.module.scss';
import Steps from '@/app/components/Steps/Steps';
import { dummyOptions } from './dummy-options/dummy-options';
import Steper from '../../../Steper/Steper';
import { WpOptionsPropsInterface } from './interfaces/wp-options-props.interface';
import { SetInfoPropsInterface } from '../../interfaces/set-info-props.interface';
import { UpdatedInfoPropsInterface } from './interfaces/updated-info-props.interface';

const WpOptions = ({
  currentStep,
  setStep,
  onSend,
  info,
}: {
  info: SetInfoPropsInterface;
  currentStep: number;
  setStep: (step: number) => void;
  onSend: (updatedInfo: UpdatedInfoPropsInterface) => void;
  setInfo:
    | ((data: SetInfoPropsInterface) => void)
    | ((data: (prev: SetInfoPropsInterface) => SetInfoPropsInterface) => void);
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      siteTitle: '',
      wpAdminUser: '',
      wpAdminPassword: '',
      wpAdminEmail: '',
    },
  });

  const [checkedItems, setCheckedItems] = useState({
    WooCommerce: false,
    EDD: false,
    Yoast: false,
  });

  const onCheckboxChange = (key: string, checked: boolean): void => {
    setCheckedItems((prev) => ({
      ...prev,
      [key]: checked,
    }));
  };
  const onSubmit = async (data: WpOptionsPropsInterface) => {
    const updatedInfo = { ...info, ...data };
    onSend(updatedInfo);

    setStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setStep(currentStep - 1);
    }
  };

  const handleContinue = handleSubmit(onSubmit);

  return (
    <form className={styles.container}>
      <Steps
        confirmation={true}
        firstHeadline={'Site options'}
        secondHeadline={'WordPress options'}
      />
      <div className={styles.contaienrWrapper}>
        <div className={styles.infoWrapper}>
          <div className={styles.info}>
            <span className={styles.headline}>WordPress site title</span>
            <span className={styles.text}>
              Appears across the top of every page of the site. You can always
              change it later
            </span>
          </div>
          <input
            {...register('siteTitle', { required: 'Site title is required' })}
            type="text"
            className={styles.input}
            placeholder="New Site"
          />
          {errors.siteTitle && (
            <p className={styles.error}>{errors.siteTitle.message}</p>
          )}
        </div>
        <div className={styles.infoWrapper}>
          <div className={styles.info}>
            <span className={styles.headline}>WordPress admin username</span>
          </div>
          <input
            {...register('wpAdminUser', { required: 'Username is required' })}
            type="text"
            className={styles.input}
            placeholder="Admin Username"
          />
          {errors.wpAdminUser && (
            <p className={styles.error}>{errors.wpAdminUser.message}</p>
          )}
        </div>
        <div className={styles.infoWrapper}>
          <div className={styles.info}>
            <span className={styles.headline}>WordPress admin password</span>
          </div>
          <input
            {...register('wpAdminPassword', {
              required: 'Password is required',
              minLength: 8,
            })}
            type="password"
            className={styles.input}
            placeholder="Admin Password"
          />
          {errors.wpAdminPassword && (
            <p className={styles.error}>{errors.wpAdminPassword.message}</p>
          )}
        </div>
        <div className={styles.infoWrapper}>
          <div className={styles.info}>
            <span className={styles.headline}>WordPress admin email</span>
          </div>
          <input
            {...register('wpAdminEmail', {
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Invalid email format',
              },
            })}
            type="email"
            className={styles.input}
            placeholder="Admin Email"
          />
          {errors.wpAdminEmail && (
            <p className={styles.error}>{errors.wpAdminEmail.message}</p>
          )}
        </div>
        <div className={styles.infoWrapper}>
          <div className={styles.info}>
            <span className={styles.headline}>Select a language</span>
          </div>
          <Select
            onChange={(value) => console.log(value)}
            className={styles.selectStyle}
            value={dummyOptions[0].value}
            options={dummyOptions}
          />
        </div>
        <div className={styles.checkboxWrapper}>
          <div className={styles.checkbox}>
            <Checkbox
              checked={checkedItems.WooCommerce}
              onChange={(e) =>
                onCheckboxChange('WooCommerce', e.target.checked)
              }
            />
            <span className={styles.plugin}>Install WooCommerce</span>
          </div>
          <div className={styles.checkbox}>
            <Checkbox
              checked={checkedItems.EDD}
              onChange={(e) => onCheckboxChange('EDD', e.target.checked)}
            />
            <span className={styles.plugin}>
              Install Easy Digital Downloads
            </span>
          </div>
          <div className={styles.checkbox}>
            <Checkbox
              checked={checkedItems.Yoast}
              onChange={(e) => onCheckboxChange('Yoast', e.target.checked)}
            />
            <span className={styles.plugin}>Install Yoast SEO</span>
          </div>
        </div>
        <div className={styles.steper}>
          <Steper
            onBack={handleBack}
            onContinue={handleContinue}
            click={currentStep}
          />
        </div>
      </div>
    </form>
  );
};

export default WpOptions;
