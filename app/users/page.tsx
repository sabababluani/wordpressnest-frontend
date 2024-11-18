import styles from './page.module.scss';
import Button from "@/app/components/Button/Button";
import {buttonbackgroundColorEnum} from "@/app/components/Button/enum/button.enum";
import UsersTable from "@/app/users/components/UsersTable/UsersTable";

const users = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1>Users Managment</h1>
        <Button
          backgroundColor={buttonbackgroundColorEnum.black}
          innerContentIconActive
          innerContent={'Invite Users'}
          innerContentIcon={'icons/adduser.svg'}
        />
      </div>
      <div>
        <UsersTable />
      </div>
    </div>
  );
};

export default users;
