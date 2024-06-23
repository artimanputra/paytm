const express = require("express");
require('dotenv').config();

const cors= require('cors')
const mainRouter= require("./routes/index")

const app=express()
app.use(express.json()) 
app.use(cors())

app.use("/api/v1",mainRouter)

// /api/v1/user/signin
// /api/v1/user/signup
// /api/v1/user/password

// /api/v1/accoun/transaction

app.listen(3000)

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//    console.log(`Server is running on port ${PORT}`);
// })