import { useState } from 'react';

export const useExternalSteper = () => {
  const [steper, setSteper] = useState(1);

  const steps = [
    {
      label: 'Storage details',
      isActive: steper === 1,
      isCompleted: steper > 1,
    },
    {
      label: 'Backup options',
      isActive: steper === 2,
      isCompleted: steper > 2,
    },
    { label: 'Confirm', isActive: steper === 3, isCompleted: steper === 3 },
  ];

  return { steper, steps, setSteper };
};
