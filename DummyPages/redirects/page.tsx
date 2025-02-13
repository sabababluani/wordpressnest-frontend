// 'use client';
// import Image from 'next/image';
// import React, { useState } from 'react';
// import { Modal, Table } from 'antd';
// import styles from './page.module.scss';
// import RedirectsModal from './components/RedirectsModal/RedirectsModal';
// import RevokeModal from '@/app/components/RevokeModal/RevokeModal';
// import Button from '@/app/components/Button/Button';
// import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
// import { DataType } from './components/interfaces/redirects-props.interface';
// import { useGetData } from '@/app/hooks/useGetData';
// import { useParams } from 'next/navigation';
// import { createData } from '@/app/api/crudService';

// const Redirects = (): JSX.Element => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isRevokeModalOpen, setIsRevokeModalOpen] = useState(false);
//   const [selectedRows, setSelectedRows] = useState<DataType[]>([]);
//   const [, setTableData] = useState<DataType[]>([]);
//   const [editRowData, setEditRowData] = useState<DataType | null>(null);
//   const params = useParams();
//   const id = params.id;
//   const { data: redirectData } = useGetData<DataType>({
//     endpoint: `wordpress/redirect/${id}`,
//   });

//   const showModal = (rowData: DataType | null = null) => {
//     setEditRowData(rowData);
//     setIsModalOpen(true);
//   };

//   const handleCancel = () => {
//     setIsModalOpen(false);
//   };

//   const handleSaveChanges = async (updatedRow: DataType) => {
//     const isEdit = !!editRowData;
//     const action = isEdit ? 'edit' : 'add';

//     const { statusCode, ...payload } = updatedRow;

//     const finalPayload = {
//       ...payload,
//       statusCode: Number(statusCode),
//       action,
//     };

//     setTableData((prevData) => {
//       const newData = prevData || [];
//       if (isEdit) {
//         return newData.map((row) =>
//           row.key === updatedRow.key ? updatedRow : row,
//         );
//       } else {
//         const newRow = { ...updatedRow, key: newData.length + 1 };
//         return [...newData, newRow];
//       }
//     });

//     await createData(`wordpress/redirect/${id}`, finalPayload);
//     setIsModalOpen(false);
//   };

//   const showRevokeModal = () => {
//     setIsRevokeModalOpen(true);
//   };

//   const handleRevokeOk = async () => {
//     setTableData((prevData) =>
//       prevData.filter(
//         (item) => !selectedRows.some((row) => row.key === item.key),
//       ),
//     );

//     setIsRevokeModalOpen(false);
//     setSelectedRows([]);

//     await Promise.all(
//       selectedRows.map(async (row) => {
//         const { statusCode, oldUrl, newUrl } = row;

//         const finalPayload = {
//           oldUrl,
//           newUrl,
//           statusCode: Number(statusCode),
//           action: 'remove',
//         };

//         await createData(`wordpress/redirect/${id}`, finalPayload);
//       }),
//     );
//   };

//   const handleRevokeCancel = () => {
//     setIsRevokeModalOpen(false);
//   };

//   const columns = [
//     {
//       title: 'Redirect From',
//       dataIndex: 'oldUrl',
//       key: 'redirectFrom',
//     },
//     {
//       title: 'Redirect To',
//       dataIndex: 'newUrl',
//       key: 'redirectTo',
//     },
//     {
//       title: 'HTTP Status Code',
//       dataIndex: 'statusCode',
//       key: 'httpStatusCode',
//     },
//     {
//       title: 'Actions',
//       key: 'actions',
//       render: (_: unknown, record: DataType) => (
//         <Image
//           src="/icons/redirectedit.svg"
//           alt="edit"
//           width={24}
//           height={24}
//           className={styles.edit}
//           onClick={() => showModal(record)}
//         />
//       ),
//     },
//   ];

//   const rowSelection = {
//     onChange: (_selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
//       setSelectedRows(selectedRows);
//     },
//   };

//   const processedRedirectData =
//     redirectData?.redirects?.map((row, index) => ({
//       ...row,
//       key: row.key || index.toString(),
//     })) || [];

//   return (
//     <div className={styles.container}>
//       <div className={styles.header}>
//         <div className={styles.headline}>
//           <span className={styles.text}>Redirects</span>
//           <span className={styles.subtext}>
//             Redirect Traffic From One Location To Another. This Is Useful For
//             Preventing 404 Errors.
//           </span>
//         </div>
//         <div className={styles.buttonsWrapper}>
//           {selectedRows.length > 0 && (
//             <div className={styles.button}>
//               <Button
//                 backgroundColor={buttonbackgroundColorEnum.red}
//                 innerContent="Delete Redirect"
//                 onClick={showRevokeModal}
//               />
//             </div>
//           )}
//           <div className={styles.button}>
//             <Button
//               backgroundColor={buttonbackgroundColorEnum.black}
//               innerContent="Add Redirect"
//               onClick={() => showModal()}
//             />
//           </div>
//         </div>
//       </div>
//       <div className={styles.tableWrapper}>
//         <Table<DataType>
//           rowKey="key"
//           rowSelection={{
//             type: 'checkbox',
//             ...rowSelection,
//           }}
//           columns={columns}
//           dataSource={processedRedirectData}
//           pagination={false}
//         />
//       </div>
//       <div className={styles.modal}>
//         <Modal
//           open={isModalOpen}
//           onCancel={handleCancel}
//           footer={null}
//           closable={false}
//           width={800}
//         >
//           <RedirectsModal
//             onClose={handleCancel}
//             rowData={editRowData}
//             onSave={handleSaveChanges}
//           />
//         </Modal>
//         <Modal
//           open={isRevokeModalOpen}
//           onCancel={handleRevokeCancel}
//           footer={null}
//           closable={false}
//           width={840}
//         >
//           <RevokeModal
//             onClose={handleRevokeCancel}
//             onSuccess={handleRevokeOk}
//             headline="Delete Redirect Rule"
//             content={
//               selectedRows.length > 0 ? (
//                 <div>
//                   Are you sure you want to delete the following redirect(s)?
//                   {selectedRows.map((row) => (
//                     <div key={row.key}>
//                       Traffic from
//                       <span className={styles.boldText}>
//                         &nbsp;{row.oldUrl}&nbsp;
//                       </span>
//                       to
//                       <span className={styles.boldText}>
//                         &nbsp;{row.newUrl}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 'No redirects selected.'
//               )
//             }
//             buttonText="Delete Rule"
//           />
//         </Modal>
//       </div>
//     </div>
//   );
// };

// export default Redirects;
