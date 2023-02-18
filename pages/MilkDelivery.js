import Layout from "../components/layout";
import Header1 from "../components/header1";


import {useForm} from 'react-hook-form';
import Router from "next/router";
import styles from '../styles/milkDelivery.module.css';









export default function MilkDelivery() {






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






{/* monday: */}
Monday:
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
        />










{/* wednesday: */}
Wednesday:
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
        />








{/* friday: */}
Friday:
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
        min='0'/>











{/* sunday: */}
Sunday:
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
        min='0'/>



{/* submit: */}

<input
                type="submit"
                value="Submit"
                />
</form>









    </Layout>);};
