'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import styles from './Search.module.scss';
import { SearchPropsInterface } from './intefaces/search-props.interfaces';

const Search = (props: SearchPropsInterface) => {
  const [inputValue, setInputValue] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (!props.clickable) {
      setInputValue(e.target.value);
      props.onChange?.(e.target.value);
    }
  };

  return (
    <div
      className={`${styles.container} ${props.isPadded ? styles.padded : ''}`}
      onClick={props.onClick}
    >
      <input
        type="search"
        className={styles.input}
        placeholder={props.placeholder}
        value={inputValue}
        onChange={onChange}
        readOnly={props.clickable}
      />
      {!props.noIcon && (
        <Image src="/icons/search.svg" width={24} height={24} alt="search" />
      )}
    </div>
  );
};

export default Search;
