
import Link from "next/link";
import {useRouter} from 'next/router';

import styles from '../styles/bottomNavigation.module.css';







export default function BottomNavigation() {

    let items = ["Home", "Milk Delivery", "Contact"];
    let router = useRouter();
    let path = router.pathname;
    console.log('path: ',path)








    return (<div className={styles.wrapperMain}>



<div className={styles.wrapper}>

{/* looping: */}
        {items.map((item, index)=>{

            let href= `/${item}`;
            if(item=='Home') {
                href='/';
            }
            if(item=='Milk Delivery') {
                href="MilkDelivery"
            }

            return <Link
            href={href}
            className={item}
            key={index}

            > {item} </Link>;

        })}



        </div>













        </div>);};
