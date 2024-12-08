import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import styles from './SearchBox.module.scss';
import { SearchBoxDummy } from './dummy/search-dummy';
import { SearchBoxPropsInterface } from './interfaces/search-box-props.interface';

const SearchBox = (props: SearchBoxPropsInterface) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === '') {
      setResults([]);
    } else {
      const filteredResults = SearchBoxDummy.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase()),
      );
      setResults(filteredResults);
    }
  };

  const showNoResults = searchQuery && results.length === 0;

  useEffect(() => {
    if (props.isVisable && inputRef?.current) {
      inputRef?.current?.focus();
    }
  }, [props.isVisable]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Image src="/icons/search.svg" alt="search" width={20} height={20} />
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchChange}
          ref={inputRef}
        />
      </div>
      <div className={styles.container}>
        {showNoResults && <span>No results found.</span>}
        {results.length > 0 && (
          <div className={styles.suggestions}>
            {results.map((result, index) => (
              <div key={index} className={styles.result}>
                <div className={styles.reloadContainer}>
                  <Image
                    src="/icons/backup.svg"
                    alt="reload"
                    width={20}
                    height={20}
                  />
                </div>
                <span>{result}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBox;
