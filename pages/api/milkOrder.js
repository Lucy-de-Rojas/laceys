import mysql from 'mysql2/promise';
import { mysqlConnect } from "../../utils/connectDB";




// saving to DB from the form:
export default async function handler(req, res) {

    let data = req.body;

    // covnerting strings into numbers:
    let monday = parseInt(data.monday);
    let wednesday = parseInt(data.wednesday);
    let friday = parseInt(data.friday);
    let sunday = parseInt(data.sunday);

    let total =((monday + wednesday + friday + sunday)*0.7*4+10).toFixed(2);





    console.log('data from the front>>>>', data);



    // connecting to DB:
    const mysqlDetails = await mysqlConnect();
    const connection = await mysql.createConnection(mysqlDetails);


// if connected to db check:
    if(connection) {
        console.log('connected to DB!!!!!');


        if(data) {

            const query = `insert into milkorders (name, email, address, postcode,monday,wednesday,friday,sunday, total) values('${data.name}', '${data.email}', '${data.address}','${data.postcode}',${monday}, ${wednesday}, ${friday}, ${sunday}, ${total})`;

            console.log('query:>>>>> ', query)

            const values = [];
            const [results] = await connection.execute(query, values);

        }
    }





    res.status(200).json({ order: 'lucy' })






}