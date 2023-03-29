//require('dotenv').config()  
const API_URL = `mongodb://127.0.0.1:27017/postdb`;

const { connect } = require('mongoose');

async function connectWithDB () {
    try {
        await connect(API_URL);
        console.log("connected with DB")
    } catch (err) {
        console.log("not connect with db")
    }
}

module.exports = connectWithDB;