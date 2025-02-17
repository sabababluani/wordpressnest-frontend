'use client';

import { Modal } from 'antd';
import PasswordExpirationModal from '../PasswordExpirationModal/PasswordExpirationModal';
import LabelModal from '@/app/(authorized)/wpsites/components/LabelModal/LabelModal';
import RenameSiteModal from '../RenameSiteModal/RenameSiteModal';
import DeleteSiteModal from '../DeleteSiteModal/DeleteSiteModal';
import ResetSiteModal from '../ResetSiteModal/ResetSiteModal';
import ProxyModule from '../ProxyModule/ProxyModule';
import { InfoModalsPropsInterface } from './interfaces/info-modals-props.interface';

const SiteModals = (props: InfoModalsPropsInterface) => (
  <>
    <Modal
      width={840}
      open={props.isPasswordExpirationModalOpen}
      onCancel={props.onClosePasswordExpirationModal}
      footer={null}
      closable={false}
    >
      <PasswordExpirationModal onClick={props.onClosePasswordExpirationModal} />
    </Modal>

    <Modal
      width={840}
      open={props.isLabelModalOpen}
      onCancel={props.onCloseLabelModal}
      footer={null}
      closable={false}
    >
      <LabelModal siteName={props.label} onClose={props.onCloseLabelModal} />
    </Modal>

    <Modal
      width={840}
      open={props.isRenameModalOpen}
      onCancel={props.onCloseRenameModal}
      footer={null}
      closable={false}
    >
      <RenameSiteModal
        onCancel={props.onCloseRenameModal}
        onMutate={props.onMutate}
      />
    </Modal>

    <Modal
      width={840}
      open={props.isDeleteModalOpen}
      onCancel={props.onCloseDeleteModal}
      footer={null}
      closable={false}
    >
      <DeleteSiteModal
        onCancel={props.onCloseDeleteModal}
        onClose={props.onCloseDeleteModal}
      />
    </Modal>

    <Modal
      width={840}
      open={props.isResetModalOpen}
      onCancel={props.onCloseResetModal}
      footer={null}
      closable={false}
      centered
    >
      <ResetSiteModal onClose={props.onCloseResetModal} />
    </Modal>

    <Modal
      width={840}
      open={props.isProxyModalOpen}
      onCancel={props.onCloseProxyModal}
      footer={null}
      closable={false}
      centered
      bodyStyle={{ padding: 0 }}
    >
      <ProxyModule onClick={props.onCloseProxyModal} />
    </Modal>
  </>
);

export default SiteModals;
