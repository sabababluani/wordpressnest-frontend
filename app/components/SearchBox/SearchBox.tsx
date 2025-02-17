import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import styles from './SearchBox.module.scss';
import { SearchBoxPropsInterface } from './interfaces/search-box-props.interface';
import { useGetData } from '@/app/hooks/useGetData';
import {
  SiteInterface,
  UserInterface,
} from '../Navigation/interfaces/navigation.props.interface';
import Link from 'next/link';

const SearchBox = (props: SearchBoxPropsInterface) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredResults, setFilteredResults] = useState<SiteInterface[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { data: sites, isLoading } = useGetData<UserInterface>({
    endpoint: 'user/me',
  });

  useEffect(() => {
    if (props.isVisable && inputRef?.current) {
      inputRef?.current?.focus();
    }
  }, [props.isVisable]);

  useEffect(() => {
    if (!sites) return;

    const results = sites.setup.filter((site) =>
      site.siteName.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    setFilteredResults(results);
  }, [searchQuery, sites]);

  return (
    props.isVisable && (
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <Image src="/icons/search.svg" alt="search" width={20} height={20} />
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            ref={inputRef}
          />
        </div>
        <div className={styles.container}>
          {!isLoading && searchQuery && filteredResults.length === 0 && (
            <span>No results found.</span>
          )}
          {!isLoading && filteredResults.length > 0 && (
            <div className={styles.suggestions}>
              {filteredResults.map((result) => (
                <Link
                  key={result.id}
                  className={styles.result}
                  href={`/${result.id}/info`}
                  onClick={props.onModalClose}
                >
                  <div className={styles.reloadContainer}>
                    <Image
                      src="/icons/handbag.svg"
                      alt="handbag"
                      width={20}
                      height={20}
                    />
                  </div>
                  <span>{result.siteName}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default SearchBox;
