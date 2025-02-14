import Button from '@/app/components/Button/Button';
import styles from './ManualBackupCreateModal.module.scss';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import { ManualBackupCreateModalPropsInterface } from './interfaces/manual-backup-create-modal-props.interface';
import { useState } from 'react';
import { createData } from '@/app/api/crudService';
import { useParams } from 'next/navigation';
import ModalHeader from '@/app/components/ModalHeader/ModalHeader';
import { useNotification } from '@/app/contexts/NotificationContext';

const ManualBackupCreateModal = (
  props: ManualBackupCreateModalPropsInterface,
) => {
  const [backupNote, setBackupNote] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const { showNotification } = useNotification();
  const { id } = useParams();
  const numberId = Number(id);

  const onNoteAdd = async () => {
    setLoading(true);
    try {
      await createData(`backup/manualimit/${numberId}`, { note: backupNote });
      props.mutate();
      props.mutateProgress();
      props.onClose();
      showNotification('Backup created successfully', 'success');
      setBackupNote('');
    } catch (error) {
      showNotification(String(error), 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <ModalHeader headline="Create Manual Backup" onClose={props.onClose} />
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
          loading={loading}
          setLoading={setLoading}
        />
      </div>
    </div>
  );
};

export default ManualBackupCreateModal;
