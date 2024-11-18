'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import styles from './Search.module.scss';
import { SearchPropsInterface } from './intefaces/search-props.interfaces';

const Search = (props: SearchPropsInterface): JSX.Element => {
  const [, setValue] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  return (
    <div
      className={`${styles.container} ${props.isPadded ? styles.padded : ''}`}
    >
      <input
        type="search"
        className={styles.input}
        placeholder={props.placeholder}
        onChange={onChange}
      />
      {!props.noIcon && (
        <Image src="/icons/search.svg" width={24} height={24} alt="search" />
      )}
    </div>
  );
};

export default Search;
