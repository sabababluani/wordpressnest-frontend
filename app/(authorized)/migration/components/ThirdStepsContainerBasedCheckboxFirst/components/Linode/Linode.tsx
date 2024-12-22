import React from 'react';
import styles from "./Linode.module.scss";
import TabsAnt from '@/app/components/Tabs/Tabs';
import Ssh from './components/Ssh/SSH';

const Linode: () => JSX.Element = (): JSX.Element => {

    return (
        <div className={styles.mainContainer} >
            <span className={styles.mainCaptionStyle} >You will need tp provide your SSH credentials to expet your site data for moving it over to your hosting account</span>
            <TabsAnt
                withoutPadding
                uniqueKey={'tabs-ant'}
                withoutBorder
                tabNames={['SSH']}
                tabContent={[
                    <Ssh key={'ssh'} />,
                ]}
            />
        </div>
    );
};

export default Linode;