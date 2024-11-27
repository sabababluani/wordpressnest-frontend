import React from 'react';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';
import styles from './InputFields.module.scss';
import BaseApi from '@/app/api/BaseApi';

interface UseFormsPropsInterface {
  wpAdminUser: string;
  wpAdminPassword: string;
  wpAdminEmail: string;
  siteTitle: string;
}

const InputFields = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UseFormsPropsInterface>({
    defaultValues: {
      wpAdminUser: '',
      wpAdminPassword: '',
      wpAdminEmail: '',
      siteTitle: '',
    },
  });

  const onSubmit = async (data: UseFormsPropsInterface) => {
    try {
      const trimmedObject = Object.fromEntries(
        Object.entries(data).map(([key, value]) => [key, value.trim()])
      );

      await BaseApi.post('setup/wordpress', trimmedObject);

      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className={styles.inputWrapper}>
      <h1>Create Site</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
        <div className={styles.inputField}>
          <input
            type="text"
            placeholder="Admin Username"
            {...register('wpAdminUser', {
              required: 'Admin Username is required',
              minLength: { value: 4, message: 'Must be at least 4 characters' },
            })}
            className={classNames(styles.input, {
              [styles.error]: errors.wpAdminUser,
            })}
          />
          {errors.wpAdminUser && (
            <p className={styles.errorMessage}>{errors.wpAdminUser.message}</p>
          )}
        </div>

        <div className={styles.inputField}>
          <input
            type="password"
            placeholder="Admin Password"
            {...register('wpAdminPassword', {
              required: 'Password is required',
              minLength: { value: 6, message: 'Must be at least 6 characters' },
            })}
            className={classNames(styles.input, {
              [styles.error]: errors.wpAdminPassword,
            })}
          />
          {errors.wpAdminPassword && (
            <p className={styles.errorMessage}>
              {errors.wpAdminPassword.message}
            </p>
          )}
        </div>

        <div className={styles.inputField}>
          <input
            type="email"
            placeholder="Admin Email"
            {...register('wpAdminEmail', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Invalid email format',
              },
            })}
            className={classNames(styles.input, {
              [styles.error]: errors.wpAdminEmail,
            })}
          />
          {errors.wpAdminEmail && (
            <p className={styles.errorMessage}>{errors.wpAdminEmail.message}</p>
          )}
        </div>

        <div className={styles.inputField}>
          <input
            type="text"
            placeholder="Site Title"
            {...register('siteTitle', {
              required: 'Site Title is required',
            })}
            className={classNames(styles.input, {
              [styles.error]: errors.siteTitle,
            })}
          />
          {errors.siteTitle && (
            <p className={styles.errorMessage}>{errors.siteTitle.message}</p>
          )}
        </div>

        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default InputFields;
