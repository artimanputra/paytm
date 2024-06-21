const mongoose= require('mongoose')

// mongodb+srv://arti:Arti@1234@cluster0.hle1z6u.mongodb.net/

mongoose.connect("mongodb+srv://arti:b9xnrHDlb4uXdNrt@cluster0.hle1z6u.mongodb.net/users")
console.log("Db is connected")

const userSchema= mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique: true,
        trim: true,  //removes extra
        lowercase:true,
        minlength:3,
        maxlength:30
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    firstName:{
        type:String,
        required:true,
        trim: true,  //removes extra
        maxlength:50
    },
    lastName:{
        type:String,
        required:true,
        trim: true,  //removes extra
        maxlength:50
    }
})

const accountSchema= new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    balance:{
        type:Number,
        required:true,
    }
})

const User= mongoose.model("users",userSchema)
const Account= mongoose.model("Account",accountSchema)
module.exports={
    User,
    Account
}