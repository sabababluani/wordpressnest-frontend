import Button from '@/app/components/Button/Button';
import styles from './ManualBackupCreateModal.module.scss';
import Image from 'next/image';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { ManualBackupCreateModalPropsInterface } from './interfaces/manual-backup-create-modal-props.interface';
import { useState } from 'react';
import { createData } from '@/app/api/crudService';
import { useParams } from 'next/navigation';

const ManualBackupCreateModal = (
  props: ManualBackupCreateModalPropsInterface,
) => {
  const [backupNote, setBackupNote] = useState<string>('');
  const { id } = useParams();
  const numberId = Number(id);

  const onNoteAdd = async () => {
    try {
      await createData(`backup/ManualLimit/${numberId}`, { note: backupNote });
      props.mutate();
      props.onClose();
      setBackupNote('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.headline}>Create Manual Backup</span>
        <Image
          src="/icons/close-mini.svg"
          alt="close"
          width={24}
          height={24}
          className={styles.close}
          onClick={props.onClose}
        />
      </div>
      <div className={styles.container}>
        <span>
          You can add a short note to make it easy to identify your backup later
          on.
        </span>
        <input
          type="text"
          value={backupNote}
          onChange={(e) => setBackupNote(e.target.value)}
          className={styles.input}
          placeholder="Enter backup note"
        />
      </div>
      <div className={styles.buttons}>
        <Button
          backgroundColor={buttonbackgroundColorEnum.grey}
          innerContent="Cancel"
          onClick={props.onClose}
        />
        <Button
          backgroundColor={buttonbackgroundColorEnum.black}
          innerContent="Create Backup"
          onClick={onNoteAdd}
        />
      </div>
    </div>
  );
};

export default ManualBackupCreateModal;
