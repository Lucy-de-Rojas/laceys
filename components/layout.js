import Head from "next/head";
import { Menu } from "@lucyderojas/menu13-next";
import styles from '../styles/layout.module.css';


export default function Layout({children}) {



    return (<>
    <Head>
    <link rel="icon" href="/Media/CowFavicon.ico" />
    </Head>


    <Menu />
    <p style={{fontFamily: 'suez'}}>hello</p>

{children}


    </>);

};
