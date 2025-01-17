'use client';

import Image from 'next/image';
import Button from '../../components/Button/Button';
import { buttonbackgroundColorEnum } from '../../components/Button/enum/button.enum';
import styles from './page.module.scss';
import { companiesData } from './access-dummy/access-dummy';
import AccessLeaveCompanyModal from './components/AccessLeaveCompanyModal/AccessLeaveCompanyModal';
import { Modal } from 'antd';
import { useState } from 'react';

const Access = () => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <p>Access</p>
        <div>
          <Button
            backgroundColor={buttonbackgroundColorEnum.whitelight}
            innerContent="Create new company"
          />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.textWrapper}>
          <p>
            This is an overview of the companies and sites you have access to,
            and the 3rd party applications that have access to your account.
          </p>
        </div>
        {companiesData.map((company) => (
          <div className={styles.content} key={company.id}>
            <span>Manage companies</span>
            <div className={styles.belowTextWrapper}>
              <p>
                You can leave any companies that you&apos;re not the owner of,
                or reach each company&apos;s settings.
              </p>
            </div>
            <div className={styles.tableWrapper}>
              <span className={styles.title}>{company.name}</span>
              <p>{company.role}</p>
              <Image
                src={'/icons/delete.svg'}
                alt={`delete ${company.name}`}
                width={24}
                height={24}
                onClick={() => setIsDeleteModalOpen(true)}
              />
            </div>
          </div>
        ))}
      </div>
      <Modal
        width={840}
        open={isDeleteModalOpen}
        onCancel={() => setIsDeleteModalOpen(true)}
        footer={null}
        closable={false}
      >
        <AccessLeaveCompanyModal
          onClose={() => setIsDeleteModalOpen(false)}
          onSuccess={() => {}}
        />
      </Modal>
    </div>
  );
};

export default Access;
