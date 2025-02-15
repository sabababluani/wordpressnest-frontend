'use client';

import { createData } from '@/app/api/crudService';
import styles from './LabelModal.module.scss';
import Button from '@/app/components/Button/Button';
import { buttonbackgroundColorEnum } from '@/app/components/Button/enum/button.enum';
import ModalHeader from '@/app/components/ModalHeader/ModalHeader';
import { useGetData } from '@/app/hooks/useGetData';
import { Checkbox } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox/Checkbox';
import Image from 'next/image';
import { useState } from 'react';
import {
  Labels,
  LabelModalPropsInterface,
} from './interfaces/label-modal-props.interface';
import { useParams } from 'next/navigation';

const LabelModal = (props: LabelModalPropsInterface) => {
  const { id } = useParams();
  const [showInput, setShowInput] = useState(false);
  const [newLabelName, setNewLabelName] = useState('');
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);

  const { data: labels = [], mutate } = useGetData<Labels[]>({
    endpoint: `wordpress/label/${id}`,
  });

  const handleAddLabel = async () => {
    if (newLabelName.trim()) {
      await createData('/labels', { name: newLabelName.trim() });
      setNewLabelName('');
      setShowInput(false);
      mutate();
    }
  };

  const handleLabelSelect = (labelId: string) => {
    setSelectedLabels((prev) =>
      prev.includes(labelId)
        ? prev.filter((id) => id !== labelId)
        : [...prev, labelId],
    );
  };

  return (
    <div className={styles.mainWrapper}>
      <ModalHeader headline={'Label site'} onClose={props.onClose} />
      <div className={styles.middleContainer}>
        {labels.map((label) => (
          <div key={label.id} className={styles.checkbox}>
            <Checkbox
              checked={selectedLabels.includes(label.id)}
              onChange={() => handleLabelSelect(label.id)}
            />
            <span className={styles.siteNameStyle}>{label.name}</span>
          </div>
        ))}

        <div className={styles.addLabelContainer}>
          {showInput && (
            <div className={styles.addLabelWrapper}>
              <div className={styles.checkbox}>
                <Checkbox
                  checked={showInput}
                  onChange={(e: CheckboxChangeEvent) => {
                    setShowInput(e.target.checked);
                    setNewLabelName('');
                  }}
                />
              </div>
              <input
                type="text"
                className={styles.inputStyle}
                value={newLabelName}
                onChange={(e) => setNewLabelName(e.target.value)}
                onBlur={handleAddLabel}
                onKeyPress={(e) => e.key === 'Enter' && handleAddLabel()}
                autoFocus
              />
            </div>
          )}
          <button
            className={styles.buttonStyle}
            onClick={() => setShowInput(true)}
          >
            <Image
              width={10}
              height={10}
              src={'/icons/Group444.svg'}
              alt={'icon'}
            />
            <span className={styles.buttonInnerContentStyle}>
              Add new label
            </span>
          </button>
        </div>

        <span className={styles.manageCatpionStyle}>
          Manage all label company settings
        </span>
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.buttonsWrapper}>
          <Button
            onClick={props.onClose}
            backgroundColor={buttonbackgroundColorEnum.grey}
            innerContent="Cancel"
          />
          <Button
            backgroundColor={buttonbackgroundColorEnum.black}
            innerContent="Apply labels"
            onClick={() => console.log('Selected Labels:', selectedLabels)}
          />
        </div>
      </div>
    </div>
  );
};

export default LabelModal;
