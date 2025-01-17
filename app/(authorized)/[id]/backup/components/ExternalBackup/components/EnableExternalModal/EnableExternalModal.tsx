import Image from 'next/image';
import styles from './EnableExternalModal.module.scss';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { Checkbox, Radio } from 'antd';
import { EnableExternalModalPropsInterface } from './interfaces/enable-externl-modal-props.interface';
import { createData } from '@/app/api/crudService';

interface Backend {
  bucket: string;
  accessKey: string;
  accessSecretKey: string;
}

const EnableExternalModal = (props: EnableExternalModalPropsInterface) => {
  const [steper, setSteper] = useState(1);
  const { register, handleSubmit, watch, setValue } = useForm({
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

  const onSubmit = async (data: Backend) => {
    console.log(data);

    try {
      await createData('backup/manualtos3', data);
      props.onClose;
    } catch (error) {
      console.log('Error submitting data:', error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className={styles.header}>
            <div className={styles.headerContainer}>
              <span className={styles.headline}>Disable AWS backups</span>
            </div>
            <Image
              src="/icons/close-mini.svg"
              alt="close"
              width={24}
              height={24}
              onClick={props.onClose}
            />
          </div>
          <div className={styles.containerWrapper}>
            <div className={styles.container}>
              <div className={styles.steper}>
                <span>Storage details</span>
                <div className={styles.progress}>
                  <div className={styles.circle}></div>
                  <div className={styles.line}></div>
                </div>
              </div>
              <div className={styles.steper}>
                <span>Backup options</span>
                <div className={styles.progress}>
                  <div
                    className={
                      steper === 2 || steper === 3
                        ? styles.circle
                        : styles.grayCircle
                    }
                  ></div>
                  <div
                    className={
                      steper === 2 || steper === 3
                        ? styles.line
                        : styles.lineCircle
                    }
                  ></div>
                </div>
              </div>
              <div className={styles.steper}>
                <span>Confirm</span>
                <div className={styles.progress}>
                  <div
                    className={steper === 3 ? styles.circle : styles.grayCircle}
                  ></div>
                  <div
                    className={steper === 3 ? styles.line : styles.lineCircle}
                  ></div>
                </div>
              </div>
            </div>

            {steper === 1 && (
              <div className={styles.firstStep}>
                <div className={styles.inputContainer}>
                  <span>AWS S3 bucket name</span>
                  <input
                    type="text"
                    {...register('bucket')}
                    placeholder="Enter bucket name"
                  />
                </div>
                <div className={styles.inputContainer}>
                  <span>AWS access key ID</span>
                  <input
                    type="text"
                    {...register('accessKey')}
                    placeholder="Enter access key ID"
                  />
                </div>
                <div className={styles.inputContainer}>
                  <span>AWS secret access key</span>
                  <input
                    type="text"
                    {...register('accessSecretKey')}
                    placeholder="Enter secret access key"
                  />
                </div>
                <div className={styles.checkWrapper}>
                  <div className={styles.check}>
                    <Checkbox
                      checked={watch('createSubfolder')}
                      onChange={(e) =>
                        setValue('createSubfolder', e.target.checked)
                      }
                    ></Checkbox>
                  </div>
                  <span>Create Zddzma Subfolder</span>
                </div>
                <div className={styles.buttons}>
                  <Button
                    backgroundColor={buttonbackgroundColorEnum.grey}
                    innerContent="Cancel"
                    onClick={props.onClose}
                  />
                  <Button
                    backgroundColor={buttonbackgroundColorEnum.black}
                    innerContent="Next"
                    onClick={() => setSteper(2)}
                  />
                </div>
              </div>
            )}

            {steper === 2 && (
              <div className={styles.secondStep}>
                <div className={styles.secondStepContainer}>
                  <span>What do you want to backup?</span>
                  <div className={styles.checkContainer}>
                    <div className={styles.checkWrapper}>
                      <div className={styles.check}>
                        <Checkbox
                          checked={watch('files')}
                          onChange={(e) => setValue('files', e.target.checked)}
                        ></Checkbox>
                      </div>
                      <span>Files</span>
                    </div>
                    <div className={styles.checkWrapper}>
                      <div className={styles.check}>
                        <Checkbox
                          checked={watch('database')}
                          onChange={(e) =>
                            setValue('database', e.target.checked)
                          }
                        ></Checkbox>
                      </div>
                      <span>Database</span>
                    </div>
                  </div>
                </div>
                <div className={styles.secondStepContainer}>
                  <span>How often do you want to backup?</span>
                  <div className={styles.types}>
                    <Radio.Group
                      value={watch('uploadFrequency')}
                      onChange={(e) =>
                        setValue('uploadFrequency', e.target.value)
                      }
                    >
                      <div className={styles.radios}>
                        <Radio value="monthly">Monthly</Radio>
                        <Radio value="weekly">Weekly</Radio>
                      </div>
                    </Radio.Group>
                  </div>
                </div>
                <span className={styles.nextBackup}>
                  Your next backup will start tomorrow at 5:00 AM
                </span>
                <div className={styles.buttons}>
                  <Button
                    backgroundColor={buttonbackgroundColorEnum.grey}
                    innerContent="Cancel"
                    onClick={() => setSteper(1)}
                  />
                  <Button
                    backgroundColor={buttonbackgroundColorEnum.black}
                    innerContent="Next"
                    onClick={() => setSteper(3)}
                  />
                </div>
              </div>
            )}

            {steper === 3 && (
              <div>
                <div className={styles.PaymentWrapperContainer}>
                  <div className={styles.subscription}>
                    <span className={styles.boldHeading}>
                      Monthly subscription
                    </span>
                    <p>
                      If you enable 6-hours backups a recurring subscription
                      will appear on your next invoice.
                    </p>
                  </div>
                  <div className={styles.priceBox}>
                    <div className={styles.headerBox}>
                      <span className={styles.backups}>AWS</span>
                      <span className={styles.price}>0.02 USD</span>
                    </div>
                    <div className={styles.bodyContainer}>
                      <div className={styles.bodyBox}>
                        <span className={styles.backups}>
                          Estimated subtotal
                        </span>
                        <span className={styles.price}>0.02 USD</span>
                      </div>
                      <div className={styles.bodyBox}>
                        <span className={styles.backups}>Tax (0%)</span>
                        <span className={styles.price}>0 USD</span>
                      </div>
                      <div className={styles.bodyBox}>
                        <span className={styles.backups}>Estimated total</span>
                        <span className={styles.price}>0.02 USD</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.paymentWrapper}>
                    <span className={styles.boldHeading}>Payment method</span>
                    <div className={styles.paymentContainer}>
                      <div className={styles.content}>
                        <Image
                          src={'/visa.svg'}
                          alt="visa"
                          width={58}
                          height={40}
                        />
                        <span className={styles.paymentCardName}>
                          Mikheil Pailodze
                        </span>
                      </div>
                      <span className={styles.paymentCardName}>**** 5980</span>
                    </div>
                  </div>
                  <div className={styles.buttons}>
                    <Button
                      backgroundColor={buttonbackgroundColorEnum.grey}
                      innerContent="Cancel"
                      onClick={() => setSteper(2)}
                    />
                    <button type="submit">Confirm</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </form>
    </>
  );
};

export default EnableExternalModal;
