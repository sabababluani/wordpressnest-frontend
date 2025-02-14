import { useState } from 'react';
import Tools from '../Tools/Tools';
import { Modal } from 'antd';
import { createData } from '@/app/api/crudService';
import { useParams } from 'next/navigation';
import PhpRestartModal from './components/PhpRestartModal/PhpRestartModal';
import { useNotification } from '@/app/contexts/NotificationContext';

const RestartPhp = () => {
  const { id } = useParams();
  const { showNotification } = useNotification();
  const [isRestartOpen, setIsRestartOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const onHandlePhpRestart = async () => {
    setLoading(true);
    try {
      await createData(`wordpress/restart/engine/${id}`, {});
      showNotification('PHP engine restarted successfully', 'success');
    } catch {
      showNotification('Failed to restart PHP engine', 'error');
    } finally {
      setLoading(false);
      setIsRestartOpen(false);
    }
  };

  return (
    <>
      <Tools
        iconPath={'arrowRepeat.svg'}
        description={
          'Restarting your PHP engine may resolve some issues that lead to site speed problems or connectivity trouble.'
        }
        caption={'Restart PHP'}
        buttonIconActivate={true}
        buttonIconPath={'loadingButton.svg'}
        ActivatedButtonCaption={'Restart PHP'}
        buttonActive={true}
        onClick={() => setIsRestartOpen(true)}
      />
      <Modal
        width={840}
        open={isRestartOpen}
        onCancel={() => setIsRestartOpen(false)}
        footer={null}
        closable={false}
      >
        <PhpRestartModal
          onClose={() => setIsRestartOpen(false)}
          onSuccess={onHandlePhpRestart}
          loading={loading}
          setLoading={setLoading}
        />
      </Modal>
    </>
  );
};

export default RestartPhp;
