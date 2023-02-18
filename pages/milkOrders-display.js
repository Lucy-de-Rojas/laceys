import Layout from "../components/layout";
import Header1 from "../components/header1";
import styles from '../styles/milkOrders-display.module.css';


import {useState, useEffect} from 'react';





export default function MilkOrdersDisplay() {


    function selectDayOfWeek(event) {
        let day = (event.target.innerHTML).toLowerCase();
        console.log('day selected:>>>> ',day);
        setDayOfWeek(day);



    }




    const [orders, setOrders] = useState([]);
    const [dayOfWeek, setDayOfWeek] = useState('');




    useEffect(()=>{


        // getting ALL data from the backend:
    async function getOrders() {

        let response = await fetch('/api/milkOrders-display');
        let data = await response.json();

        setOrders(data);

        console.log('data from the back:>>>>', data)
    }










    // dynamic by dayOfWeek:
    async function getOrdersByDAY() {

            let response = await fetch(`/api/orderMilkByDAY/${dayOfWeek}`);

            let data = await response.json();
            setOrders(data);



    }



    // get orders all OR dynamic:
    if(dayOfWeek) {
        getOrdersByDAY();
    }
    else {
        getOrders();
    }





    },[dayOfWeek]);







    return (<Layout>


        <Header1 text='Milk Orders'  />


<h2>Delivery days:</h2>
<p>Selected day:
     <span style={{
        padding: '0 20px',
        fontWeight: '900',

     }}>

     {dayOfWeek? dayOfWeek : 'all'}
     </span>

     </p>


<div className={styles.buttonsWrapper}>
        <button onClick={selectDayOfWeek}>Monday</button>
        <button onClick={selectDayOfWeek}>Wednesday</button>
        <button onClick={selectDayOfWeek}>Friday</button>
        <button onClick={selectDayOfWeek}>Sunday</button>
        <button onClick={()=>{setDayOfWeek('')}}>All</button>


        {/* today button: */}
        <button onClick={()=>{

            let daysOfWeek = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

            let date = new Date();
            let dayOfWeekToday = date.getDay();

            console.log('today:>>>',dayOfWeekToday, daysOfWeek[parseInt(dayOfWeekToday-1)]);

            if(dayOfWeekToday!= 'monday' || dayOfWeekToday != 'wednesday' || dayOfWeekToday != 'friday' || dayOfWeekToday != 'sunday') {
                setOrders([]);
            }
            else {

                setDayOfWeek(dayOfWeek[parseInt(dayOfWeekToday)]);
            }





        }}>Today</button>
</div>



        {orders.map((item)=>{


return <div key={item.id}>


<p>name: {item.name}</p>
<p>postcode: {item.postcode}</p>


<p>monday: {item.monday}</p>
<p>wednesday: {item.wednesday}</p>
<p>friday: {item.friday}</p>
<p>sunday: {item.sunday}</p>

<hr />

                    </div>;
        })}







    </Layout>);};
