import Image from "next/image";
import Link from 'next/link';
import Hamburger from "hamburger-react";
import {useState, useEffect} from 'react';


import { Menu } from "@lucyderojas/menu13-next";
import styles from '../styles/MenuAndLogo.module.css';











export default function MenuAndLogo() {
    const [isOpen, setOpen] = useState(false);



    // on burger menu click: 🟥
    function MenuNavigation() {

        let menu = document.querySelector('.MenuAndLogo_menuWrapper__rTBBr');



        if(!isOpen) {
            console.log('open')
            menu.style.transform = 'translateX(0%)';

        }
        else {
            console.log('closed')
            menu.style.transform = 'translateX(-150%)';

        }
    }







    return (<div className={styles.wrapper}>




<div className={styles.burgerAndLogoWrapper}>


        {/* burger menu: */}
        <div className={styles.burgerMenuWrapper}>
        <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            onToggle={MenuNavigation}
            rounded easing='ease-in-out'
            color='rgb(174,0,27)'
            label='Show Menu'
            size={50}

            />
            </div>








{/* logo: */}
<div className={styles.logoWrapper}>
    <Link href="/" >
        <Image
            src="/Media/Photoshoot/Logo.jpg"
            width={1536}
            height={470}
            layout="responsive"
            />
            </Link>
            </div>

</div> {/* end of .burgerAndLogoWrapper */}






            {/* menu13: */}

<div className={styles.menuWrapper}>
    <div className={styles.menu}>
        <Menu

            pages={["home", "about", "Contact"]}

            backgroundBasic = 'rgb(174,0,27)'
            colorBasic = 'white'

            backgroundHover = 'rgb(204,151,45)'
            colorHover = 'white'

            backgroundSelected = "rgb(204,151,45)"
            colorSelected = 'white'


        />
    </div>
</div>



    </div>);};
