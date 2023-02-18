import mysql from 'mysql2/promise';

import {mysqlConnect} from '../../../utils/connectDB';




// saving to DB from the form:
export default async function handler(req, res) {


    let dayOfWeek = req.query.day;

    console.log('day of week in dynamic back end API:>>>>', dayOfWeek)



    // connecting to DB:
    const mysqlDetails = await mysqlConnect();
    const connection = await mysql.createConnection(mysqlDetails);



// query:
const query = `SELECT * from milkorders where ${dayOfWeek} > 0`;


console.log('query:>>>>> ', query)

const values = [];
const [results] = await connection.execute(query, values);




res.status(200).json(results);













}