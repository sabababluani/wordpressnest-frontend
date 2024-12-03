'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import styles from './Search.module.scss';
import { SearchPropsInterface } from './intefaces/search-props.interfaces';

const Search: React.FC<SearchPropsInterface> = (props) => {
  const [inputValue, setInputValue] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
    props.onChange!(e.target.value);
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
      />
      {!props.noIcon && (
        <Image src="/icons/search.svg" width={24} height={24} alt="search" />
      )}
    </div>
  );
};

export default Search;
