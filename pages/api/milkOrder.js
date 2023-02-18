import mysql from 'mysql2/promise';
import { mysqlConnect } from "../../utils/connectDB";





export default async function handler(req, res) {

    let data = req.body;

    // covnerting strings into numbers:
    let monday = parseInt(data.monday);
    let wednesday = parseInt(data.wednesday);
    let friday = parseInt(data.friday);
    let sunday = parseInt(data.sunday);





    console.log('data from the front>>>>', data);



    // connecting to DB:
    const mysqlDetails = await mysqlConnect();
    const connection = await mysql.createConnection(mysqlDetails);


// if connected to db check:
    if(connection) {
        console.log('connected to DB!!!!!')
    }






}