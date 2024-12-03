import Newsletter from './components/Newsletter/Newsletter';
import NotificationContainer from './components/NofiticationContainer/NotificationContainer';
import Notifications from './components/Notifications/Notification';
import styles from './notifications.module.scss';

const notification = () => {
  return (
    <div className={styles.mainContainer}>
      <Notifications />
      <Newsletter />
      <NotificationContainer
        toggleActive={true}
        caption={'Invoice in email'}
        description={
          'You can receive your invoices in email (Novatorimagaria123@gmail.com) attached as PDF. this is delivered for all companies where you have permission to visit the company section'
        }
      />
      <div className={styles.wrapper}>
        <NotificationContainer
          buttonActive={true}
          caption={'Research invitations '}
          description={
            'You can receive your invoices in email (Novatorimagaria123@gmail.com) attached as PDF. this is delivered for all companies where you have permission to visit the company section'
          }
        />
      </div>
    </div>
  );
};

export default notification;
