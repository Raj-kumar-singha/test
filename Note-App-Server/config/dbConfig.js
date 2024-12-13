require('dotenv').config();

console.log('DB Name:', process.env.DB_NAME);
console.log('DB User:', process.env.DB_USER);
console.log('DB Password:', process.env.DB_PASSWORD);

let config = {
        DB_Name: "notes_app",
        DB_Username: "root",
        DB_Password: process.env.dbPassword,
        options: {
            host: "localhost",
            dialect: "mysql",
            logging: false,
            timezone: '+05:30'
        }
    }

module.exports = config;
