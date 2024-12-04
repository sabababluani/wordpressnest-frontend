'use client';

import { Radio } from 'antd';
import styles from './BillingDetails.module.scss';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BillingDetailsPropsInterface } from '../../interfaces/billingDetails.props.interface';
import BaseApi from '@/app/api/BaseApi';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';

const BillingDetails = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BillingDetailsPropsInterface>();
  const [selectedOption, setSelectedOption] = useState<string>('Company');

  const handleRadioChange = (e: any) => setSelectedOption(e.target.value);

  const onSubmit = async (data: BillingDetailsPropsInterface) => {
    await BaseApi.post('arvicijer', data);
  };

  const handleCancel = () => {
    reset();
  };

  const countryOptions = [
    { code: 'US', name: 'United States' },
    { code: 'CA', name: 'Canada' },
    { code: 'GB', name: 'United Kingdom' },
    { code: 'GE', name: 'Georgia' },
    { code: 'FR', name: 'France' },
  ];

  const cityOptions = [
    { code: 'NYC', name: 'New York City', country: 'US' },
    { code: 'TOR', name: 'Toronto', country: 'CA' },
    { code: 'LON', name: 'London', country: 'GB' },
    { code: 'TBS', name: 'Tbilisi', country: 'GE' },
    { code: 'PAR', name: 'Paris', country: 'FR' },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.headline}>Billing details</span>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.container}>
          <div className={styles.organization}>
            <span>Organization Type</span>
            <div className={styles.types}>
              <Radio.Group onChange={handleRadioChange} value={selectedOption}>
                <Radio value="Individual">Individual</Radio>
                <Radio value="Company">Company</Radio>
              </Radio.Group>
            </div>
          </div>
          <div className={styles.information}>
            <div className={styles.section}>
              <div className={styles.info}>
                <span className={styles.title}>Company Name</span>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Company Name"
                  {...register('companyName', {
                    required: 'Company Name is required',
                    minLength: {
                      value: 4,
                      message: 'Must be at least 4 characters',
                    },
                  })}
                />
                {errors.companyName && (
                  <p className={styles.error}>{errors.companyName.message}</p>
                )}
              </div>
              <div className={styles.info}>
                <span className={styles.title}>Company ID</span>
                <span className={styles.id}>
                  2csabsahda-asdjsdas-1234kasdsad
                </span>
              </div>
            </div>
            <div className={styles.section}>
              <div className={styles.info}>
                <span className={styles.title}>Country *</span>
                <select
                  className={styles.input}
                  {...register('country', {
                    required: 'Country is required',
                  })}
                >
                  <option value="">Select a country</option>
                  {countryOptions.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.name}
                    </option>
                  ))}
                </select>
                {errors.country && (
                  <p className={styles.error}>{errors.country.message}</p>
                )}
              </div>
              <div className={styles.info}>
                <span className={styles.title}>City *</span>
                <select
                  className={styles.input}
                  {...register('city', {
                    required: 'City is required',
                  })}
                >
                  <option value="">Select a city</option>
                  {cityOptions.map((city) => (
                    <option key={city.code} value={city.code}>
                      {city.name}
                    </option>
                  ))}
                </select>
                {errors.city && (
                  <p className={styles.error}>{errors.city.message}</p>
                )}
              </div>
            </div>
            <div className={styles.section}>
              <div className={styles.info}>
                <span className={styles.title}>State</span>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="State"
                  {...register('state', {
                    required: 'State is required',
                    minLength: {
                      value: 4,
                      message: 'Must be at least 4 characters',
                    },
                  })}
                />
                {errors.state && (
                  <p className={styles.error}>{errors.state.message}</p>
                )}
              </div>
              <div className={styles.info}>
                <span className={styles.title}>ZIP Code</span>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="ZIP Code"
                  {...register('zipCode', {
                    required: 'ZIP code is required',
                    minLength: {
                      value: 4,
                      message: 'Must be at least 4 characters',
                    },
                  })}
                />
                {errors.zipCode && (
                  <p className={styles.error}>{errors.zipCode.message}</p>
                )}
              </div>
            </div>
            <div className={styles.section}>
              <div className={styles.info}>
                <span className={styles.title}>Address Line1</span>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Address line1"
                  {...register('addressOne', {
                    required: 'Address line 1 is required',
                    minLength: {
                      value: 4,
                      message: 'Must be at least 4 characters',
                    },
                  })}
                />
                {errors.addressOne && (
                  <p className={styles.error}>{errors.addressOne.message}</p>
                )}
              </div>
              <div className={styles.info}>
                <span className={styles.title}>Address Line2</span>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Address Line2"
                  {...register('addressTwo', {
                    required: 'Address Line2 is required',
                    minLength: {
                      value: 4,
                      message: 'Must be at least 4 characters',
                    },
                  })}
                />
                {errors.addressTwo && (
                  <p className={styles.error}>{errors.addressTwo.message}</p>
                )}
              </div>
            </div>
          </div>
          <div className={styles.submittion}>
            <Button
              innerContent="Cancel"
              backgroundColor={buttonbackgroundColorEnum.white}
              onClick={handleCancel}
            />
            <Button
              innerContent="Save"
              backgroundColor={buttonbackgroundColorEnum.black}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default BillingDetails;
