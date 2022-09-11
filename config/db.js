import {Sequelize} from "sequelize";
import dotenv from 'dotenv';
dotenv.config();

const db = new Sequelize(process.env.DB_NAME,"root","",{
    host:process.env.DB_HOST,
    port:"3306",
    dialect:"mysql",
    username:process.env.DB_USER,
    password:process.env.DB_PASS,
    define:{
        timestamps:false
    },
    pool:{
        max:5,
        min:0,
        acquire:30000,
        iddle:10000
    },
    operatorsAliases:0
});

export default db;