import { useState } from 'react';
import Tools from '../Tools/Tools';
import { Modal } from 'antd';
import ChangePhpSettings from '../ChangePhpSettings/ChangePhpSettings';

const PhpSettings = () => {
  const [isPhpSettingsOpen, setIsPhpSettingsOpen] = useState(false);

  return (
    <>
      <Tools
        iconPath={'phpIcon.svg'}
        description={
          'Easily switch between different PHP versions to keep your site up to date.'
        }
        caption={'PHP settings'}
        dropDownActive
        onClick={() => setIsPhpSettingsOpen(true)}
      />

      <Modal
        open={isPhpSettingsOpen}
        onCancel={() => setIsPhpSettingsOpen(false)}
        footer={null}
        closable={false}
        width={1004}
      >
        <ChangePhpSettings
          onClose={() => setIsPhpSettingsOpen(false)}
          onClick={() => console.log('Next')}
        />
      </Modal>
    </>
  );
};

export default PhpSettings;
