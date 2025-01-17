'use client';

import { Modal, Table } from 'antd';
import type { TableColumnsType } from 'antd';
import Image from 'next/image';
import React, { useState } from 'react';
import styles from '@/app/styles/shared-table.module.scss';
import { ipDenyData } from '../../dummy-data/ipdeny-data';
import { IpTablePropsInterface } from './interfaces/ip-table-props.interface';
import IpEditModal from './components/IpEditModal/IpEditModal';
import RevokeModal from '@/app/components/RevokeModal/RevokeModal';

const IpTable = () => {
  const [isEditOpen, setIsEditModal] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);

  const columns: TableColumnsType<IpTablePropsInterface> = [
    {
      title: 'IP Addresses',
      dataIndex: 'Ipaddresses',
      render: (text: string) => <div>{text}</div>,
      width: '40%',
    },
    {
      title: 'Date',
      dataIndex: 'Date',
      render: (text) => <div>{text}</div>,
      width: '40%',
    },
    {
      title: 'Action',
      dataIndex: 'address',
      render: () => (
        <div className={styles.actionbuttons}>
          <Image
            src={'/icons/edit.svg'}
            alt={'edit'}
            width={24}
            height={24}
            onClick={() => setIsEditModal(true)}
          />
          <Image
            src={'/icons/trash.svg'}
            alt={'delete'}
            width={24}
            height={24}
            onClick={() => setIsDeleteModal(true)}
          />
        </div>
      ),
      width: '20%',
    },
  ];

  return (
    <div className={styles.tableWrapper}>
      <Table<IpTablePropsInterface>
        rowSelection={{ type: 'checkbox' }}
        columns={columns}
        dataSource={ipDenyData}
        pagination={false}
        rowKey="Ipaddresses"
      />
      <Modal
        width={840}
        open={isEditOpen}
        onCancel={() => setIsEditModal(false)}
        footer={null}
        closable={false}
      >
        <IpEditModal
          onClose={() => setIsEditModal(false)}
          onSuccess={() => {}}
        />
      </Modal>
      <Modal
        width={840}
        open={isDeleteModal}
        onCancel={() => setIsDeleteModal(false)}
        footer={null}
        closable={false}
      >
        <RevokeModal
          onClose={() => setIsDeleteModal(false)}
          onSuccess={() => {}}
          headline={'Delete redirect rule'}
          content={
            'Are you sure you want to remove the IP "127.0.0.1" from the deny list?'
          }
          buttonText={'Remove IP Adress'}
        />
      </Modal>
    </div>
  );
};

export default IpTable;
