const express = require('express');
const app = express();
app.use(express.json());

let USERS_DATABASE = [];


app.post('/signup' , (req , res) => {
    const username = req.body.username;
    const password = req.body.password;

    // LOGIC THAT THE USER CANNOT SIGNUP MORE THAN ONCE

    if (USERS_DATABASE.find(U => U.USERNAME === username)) {
        res.status(400).json({
            msg: "Cannot SignUP User Already Registered!!"
        })
    }
    else {
        USERS_DATABASE.push({
            USERNAME: username,
            PASSWORD: password
        })

        res.json({
            msg: "User Registered!!"
        })
    }

    console.log(USERS_DATABASE);


})




app.get('/' , (req , res) => {res.json({msg:"HOMEPAGE!"})})
app.listen(3000);