import { UserRecordPropsInterface } from '../interface/table-interface';

export const usersSettingsDummy: UserRecordPropsInterface[] = [
  {
    key: '1',
    name: 'Madona',
    email: 'Novatorimagari122@gmail.com',
    role: 'Company owner',
    access: 'All service',
    image: '/profpicture.png',
    button: true,
  },
  {
    key: '2',
    name: 'Nanuli',
    email: 'team@example.com',
    role: 'Manager',
    access: 'Limited service',
    image: '/profpicture.png',
    icon: 'icons/tabletrash.svg',
    iconSecond: 'icons/userman.svg',
  },
];
