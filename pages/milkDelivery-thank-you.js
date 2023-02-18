import Layout from "../components/layout";
import Header1 from "../components/header1";

import {useRouter} from "next/router";




export default function MilkDeliveryThankYou() {

    const router = useRouter();
    const {query: {name,postcode,total, monday, wednesday, friday, sunday}} = router;

    let headerText = `Thank you for your order, ${name}`;
    let items = [];

    if(monday>0) {
        items.push({day:'Mondays', quatity: monday});
    }
    if(wednesday>0) {
        items.push({day:'Wednesdays', quatity: wednesday});
    }
    if(friday>0) {
        items.push({day: 'Fridays', quatity: friday});
    }
    if(sunday>0) {
        items.push({day: 'Sundays', quatity: sunday});
    }









    return (<Layout>

<Header1 text={headerText} />
<p>Name: {name}</p>
<p>Postcode: {postcode}</p>

<hr />

{items.map((item, index)=>{
    return <p key={index}>{item.day}: {item.quatity}</p>;
})}



<p style={{
    backgroundColor: 'grey',
    padding: '20px',
    margin: 'auto',
    width: '50%',
}}>Total: <span style={{
                    fontWeight:'900',
                    color: 'white',
                    }}>  £{total}
    </span>
    </p>

    </Layout>);
};
