import styles from './SitesSelect.module.scss';

const SitesSelect = (): JSX.Element => {
  return (
    <select className={styles.select} defaultValue="all sites">
      <option value="all">All Sites</option>
      <option value="site1">Site 1</option>
      <option value="site2">Site 2</option>
      <option value="site3">Site 3</option>
    </select>
  );
};

export default SitesSelect;
