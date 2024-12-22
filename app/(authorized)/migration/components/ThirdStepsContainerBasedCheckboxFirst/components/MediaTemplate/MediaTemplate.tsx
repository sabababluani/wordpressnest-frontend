import TabsAnt from '@/app/components/Tabs/Tabs';
import InputAndLabel from '../DigitalOcean/components/InputAndLabel/InputAndLabel';
import Sftp from './components/Sftp/Sftp';
import Ssh from './components/Ssh/Ssh';
import styles from './MediaTemplate.module.scss';

const MediaTemplate = () => {
  return (
    <div className={styles.mainWrapper}>
      <span className={styles.mainCaptionStyle}>
        We will need to access your WPX Hosting account to export your site data
        for movign it over to hyour hosting account. if you have 2- factor
        authetication enabled, plaze disable it now for the time of migration
      </span>
      <InputAndLabel
        firstColumnActive
        secondColumnActive
        firstColumnLabel={'Media temple username'}
        secondColumnLabel={'Media Temple password'}
      />
      <TabsAnt
        withoutPadding
        uniqueKey={'tabs-ant'}
        withoutBorder
        tabNames={['SFTP', 'SSH']}
        tabContent={[<Sftp key={'sftp'} />, <Ssh key={'ssh'} />]}
      />
    </div>
  );
};

export default MediaTemplate;
