import Head from "next/head";



import { Menu } from "@lucyderojas/menu13-next";
import styles from '../styles/layout.module.css';
import MenuAndLogo from "./MenuAndLogo";

import BottomNavigation from "./bottomNavigation";


export default function Layout({children}) {







    return (<div className={styles.wrapper}>
    <Head>
        {/* favicon: */}
    <link rel="icon" href="/Media/CowFavicon.ico" />
    </Head>

    <p className={styles.disclaimer}>
    This site is a copy version from 2014-2016.
    <br />
    To visit current site please visit this link <a href="https://www.laceysfamilyfarm.co.uk/">Laceys</a>.
</p>
    <MenuAndLogo />

    <div className={styles.contentWrapper}>




{children}


    </div>


<BottomNavigation />

    </div>);

};
