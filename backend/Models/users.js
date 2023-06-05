const mongoose = require('mongoose')

const DualusersSchema = new mongoose.Schema({

    username:{
        type:String,
        required : true,
    },
    password:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required : true,
        Unique:true,
    },
    mobilenumber:{
        type: String,
        required : true,
    },
},
{
    timestamps:true,
});

const DualUsers= mongoose.model("DualUsers",DualusersSchema);

module.exports = DualUsers;