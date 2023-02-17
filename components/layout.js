import Head from "next/head";



import { Menu } from "@lucyderojas/menu13-next";
import styles from '../styles/layout.module.css';

import MenuAndLogo from "./MenuAndLogo";




export default function Layout({children}) {







    return (<>
    <Head>
        {/* favicon: */}
    <link rel="icon" href="/Media/CowFavicon.ico" />
    </Head>


    <MenuAndLogo />


{children}


    </>);

};
