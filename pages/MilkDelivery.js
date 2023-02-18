import Layout from "../components/layout";
import Header1 from "../components/header1";


import {useForm} from 'react-hook-form';
import Router from "next/router";
import styles from '../styles/milkDelivery.module.css';
import {useState, useEffect} from 'react';








export default function MilkDelivery() {

    const pricePerPint = 0.7;

    const [monday, setMonday] = useState(0);
    const [wednesday, setWednesday] = useState(0);
    const [friday, setFriday] = useState(0);
    const [sunday, setSunday] = useState(0);

    const [total, setTotal] = useState(0);







// getting data from the form:
    async function getFormData(data) {

        // console.log('form data:>>>> ',data);



        // if no milks ordered but pressed submit:
        if(data.monday=='0' && data.wednesday=='0' && data.friday=='0' && data.sunday=='0') {
                alert('put some milk in youir basket please!');

        }

        // if data correct : send data to the back end:
        else {


        // router push to confirmation page:
        Router.push({
            pathname: '/milkDelivery-thank-you',
            query: {
                name: data.name,
                postcode: data.postcode,
                monday: data.monday,
                wednesday: data.wednesday,
                friday: data.friday,
                sunday: data.sunday,
                total: (
                    (parseInt(monday) +
                    parseInt(wednesday)+
                    parseInt(friday)+
                    parseInt(sunday)
                    ) * pricePerPint).toFixed(2),
            }
        });


            let respose = await fetch('/api/milkOrder', {
                method: 'POST',
                mode: 'cors',
                credentials: 'same-origin',
                headers: {
                    "Content-Type":"application/json",
                },
                body: JSON.stringify(data),
            });













        }   // end of check








    }










// form defaults:
const formDefaults= {
    defaultValues: {
        name: '',
        email: '',
        address: '',
        postcode: '',

        monday: '0',
        wednesday: '0',
        friday: '0',
        sunday: '0',


    }
}


    // using form hook:
    const {register, handleSubmit, watch, formState: {errors}} = useForm(formDefaults);




    return (<Layout>
        <Header1 text='Milk Delivery - Booking Form' />

<p>Orders placed here are for delivery of 1pint bottle of semi skimmed milk. 1 pint of milk costs £0.7</p>







{/* FORM: */}
<form
    onSubmit={handleSubmit(getFormData)}
    className={styles.form}


    >



        {/* name: */}
        <input  {
            ...register('name', {
                required: {
                    value: true,
                    message: 'we need your name'
                },
                maxLength: {
                    value: 150,
                    message: 'name needs to be shorter',
                },
            })
        }



        type="text"
        placeholder="name"
        className={styles.input}


        />

        <p className={styles.errormessage}>{errors.name?.message}</p>







        {/* email: */}
        <input  {
            ...register('email', {
                required: {
                    value: true,
                    message: 'we need your email'
                },
                maxLength: {
                    value: 250,
                    message: 'email needs to be shorter',
                },
            })
        }



        type="email"
        placeholder="email"
        className={styles.input}


        /><p className={styles.errormessage}>{errors.email?.message}</p>









           {/* address: */}
           <textarea  {
            ...register('address', {
                required: {
                    value: true,
                    message: 'we need your addrress'
                },
                maxLength: {
                    value: 1000,
                    message: 'addrress needs to be shorter',
                },
            })
        }



        placeholder="address"
        rows='5'
        className={styles.input}


        /><p className={styles.errormessage}>{errors.address?.message}</p>





{/* postcode: */}
   <input  {
            ...register('postcode', {
                required: {
                    value: true,
                    message: 'we need your postcode'
                },
                maxLength: {
                    value: 20,
                    message: 'postcode needs to be shorter',
                },
                minLength: {
                    value: 5,
                    message: 'postcodes needs to contain 5 characters at least'
                },
                pattern: {
                    value: /HP|SL/gi,
                    message: 'we deliver to postcodes starting with HP or SL'
                },
            })
        }



        type="text"
        placeholder="postcode"
        className={styles.input}


        /><p className={styles.errormessage}>{errors.postcode?.message}</p>



<div className={styles.daysOfWeekWRAPPER}>


<div className={styles.dayOfWeek}>
{/* monday: */}
<p>Monday:</p>
        {/* name: */}
        <input  {
            ...register('monday', {
                max: {
                    value: 10,
                    message: '10 milk bottles limit',
                },
                min: {
                    value: 0,
                }
            })
        }



        type="number"
        placeholder="Monday"
        className={styles.input}
        max='10'
        min='0'
        onChange={(event)=>{
            setMonday(event.target.value);

        }}
        />

        <p>£{ (monday*pricePerPint).toFixed(2)}</p>
</div>  {/* end of .dayOfWeek */}










<div className={styles.dayOfWeek}>
{/* wednesday: */}
<p>Wednesday:</p>
        {/* name: */}
        <input  {
            ...register('wednesday', {
                max: {
                    value: 10,
                    message: '10 milk bottles limit',
                },
                min: {
                    value: 0,
                },
            })
        }

        type="number"
        placeholder="Wednesday"
        className={styles.input}
        max='10'
        min='0'
        onChange={(event)=>{
            setWednesday(event.target.value);

        }}
        />
        <p>£{(wednesday*pricePerPint).toFixed(2)}</p>
        </div>  {/* end of .dayOfWeek */}








<div className={styles.dayOfWeek}>
{/* friday: */}
<p>Friday:</p>
        {/* name: */}
        <input  {
            ...register('friday', {
                max: {
                    value: 10,
                    message: '10 milk bottles limit',
                },
                min: {
                    value: 0,
                },
            })
        }

        type="number"
        placeholder="Friday"
        className={styles.input}
        max='10'
        min='0'
        onChange={(event)=>{setFriday(event.target.value)}}
        />
        <p>£{(friday* pricePerPint ).toFixed(2)}</p>
</div>  {/* end of .dayOfWeek */}








<div className={styles.dayOfWeek}>
{/* sunday: */}
<p>Sunday:</p>
        {/* name: */}
        <input  {
            ...register('sunday', {
                max: {
                    value: 10,
                    message: '10 milk bottles limit',
                },
                min: {
                    value: 0,
                },
            })
        }

        type="number"
        placeholder="Sunday"
        className={styles.input}
        max='10'
        min='0'
        onChange={(event)=>{setSunday(event.target.value)}}/>
<p>£{(sunday * pricePerPint).toFixed(2)}</p>

</div>  {/* end of .dayOfWeek */}

<hr style={{
    width: '100%',
}} />




{/* subtotal: */}
<p style={{
    textAlign: 'right',
    width: '100%',
    fontWeight: 'bold',
    padding: '20px',
    marginTop: '20px',
}}>Sub-total: £{(
                (parseInt(monday) +
                parseInt(wednesday)+
                parseInt(friday)+
                parseInt(sunday)
                ) * pricePerPint).toFixed(2)}
                /week

                </p>



{/* delivery: */}
<p style={{
    textAlign: 'right',
    width: '100%',
    fontWeight: 'bold',
    padding: '20px',
    marginTop: '20px',
}}>Delivery charge: £10/month</p>





{/* total: */}
                <p style={{
    textAlign: 'right',
    width: '100%',
    fontWeight: 'bold',
    padding: '20px',
    marginTop: '20px',
}}>Total: £{(
                (parseInt(monday) +
                parseInt(wednesday)+
                parseInt(friday)+
                parseInt(sunday)
                ) * pricePerPint*4+10).toFixed(2)}
                /month

                </p>






        </div> {/* end of .daysOfWeekWRAPPER */}









{/* submit: */}
<input
                type="submit"
                value="Submit"
                className={styles.submit}
                />
</form>









    </Layout>);};
