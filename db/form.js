const mongoose = require("mongoose")

const regSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true
    },

    lastname: {
        type: String,
        required: true
    },

    email:{
        type:String,
        required: true,
        unique: true
    },

    phone:{
        type:Number,
        required: true,
        unique: true
    },

    question1:{
        type: Number,
        required: true,   
    },

    question2:{
        type: Number,
        required: true,
    },

    question3:{
        type: Number,
        required: true,
    },

    question4:{
        type: Number,
        required: true,
    },

    question5:{
        type: Number,
        required: true,
    },

})

const Form = new mongoose.model("Form", regSchema)

module.exports = Form