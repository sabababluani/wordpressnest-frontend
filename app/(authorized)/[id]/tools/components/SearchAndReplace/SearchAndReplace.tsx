import { Modal } from 'antd';
import { useState } from 'react';
import Tools from '../Tools/Tools';
import SearchReplaceModal from './components/SeachReplaceModal/SearchReplaceModal';

const SearchAndReplace = () => {
  const [isSearchReplaceOpen, setIsSearchReplaceOpen] = useState(false);

  return (
    <>
      <Tools
        iconPath={'searchTools.svg'}
        description={
          'Find and replace any value in the database, for example, after changing domains.'
        }
        caption={'Search & Replace'}
        buttonActive={true}
        ActivatedButtonCaption={'Search & Replace'}
        onClick={() => setIsSearchReplaceOpen(true)}
      />
      <Modal
        width={840}
        open={isSearchReplaceOpen}
        onCancel={() => setIsSearchReplaceOpen(false)}
        footer={null}
        closable={false}
      >
        <SearchReplaceModal
          onClose={() => setIsSearchReplaceOpen(false)}
          onSuccess={() => {}}
        />
      </Modal>
    </>
  );
};

export default SearchAndReplace;
