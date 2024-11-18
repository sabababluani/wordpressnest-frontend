'use client';
import React from 'react';
import styles from './page.module.scss';
import Button from "@/app/components/Button/Button";
import {buttonbackgroundColorEnum} from "@/app/components/Button/enum/button.enum";
import RedirectsTable from "@/app/redirects/components/RedirectsTable/RedirectsTable";

const redirects = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headline}>
          <span className={styles.text}>Redirects</span>
          <span className={styles.subtext}>
            Redirect Traffic From One Location To Another. This Is Useful For
            Preventing 404 Errors.
          </span>
        </div>
        <div className={styles.button}>
          <Button
            backgroundColor={buttonbackgroundColorEnum.black}
            innerContent="Add Redirect"
          />
        </div>
      </div>
      <RedirectsTable />
    </div>
  );
};

export default redirects;
