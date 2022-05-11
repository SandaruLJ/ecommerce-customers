import {ICustomer} from "../interfaces/ICustomer";
import * as mongoose from "mongoose";
const Schema = mongoose.Schema;
const CustomerSchema = new Schema({
    fname:{
        type:String,
        required:true,
        trim:true
    },
    lname:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    phone:{
        type:String,
        required:true,
        trim:true
    },
    gender:{
        type:String,
        required:false,
        default: null

    },
    dob:{
        type:Date,
        required:false,
        default: null
    },
    houseNo:{
        type:String,
        required:false,
        trim:true,
        default: null
    },
    street:{
        type:String,
        required:false,
        trim:true,
        default: null
    },
    city:{
        type:String,
        required:false,
        trim:true
    },
    postalCode:{
        type:String,
        required:false,
        trim:true
    },
    country:{
        type:String,
        required:false,
        default: null
    }
});
export default mongoose.model<ICustomer & mongoose.Document>('customers',CustomerSchema)