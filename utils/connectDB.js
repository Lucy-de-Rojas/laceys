// const ourIpURL = "https://ourips-lucy-de-rojas.vercel.app/api/ourips";



// const ourIpURL = process.env.HOST;
// const database = process.env.DATABASE_NAME;
// const password = process.env.PASSWORD;
// const user = process.env.USER;



const ourIpURL = process.env.HOST;
const database = 'laceys';
const password = process.env.PASSWORD;
const user = process.env.USER;




import mysql from 'mysql2/promise';



export async function mysqlConnect() {


    console.log('inside utils/connectDB')
    let response = await fetch(ourIpURL);
    let data = await response.json();
    let ourIP = data.ourIp;
    console.log('ourIP: ', ourIP, typeof ourIP)

const result = {
    host: ourIP,
    database: database,
    port: 3306,
    user: user,
    password: password,
}

return result;





}




