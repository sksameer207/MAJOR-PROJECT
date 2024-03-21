const mongoose = require('mongoose');
const Schema =mongoose.Schema;
 

const listingSchema= new Schema({
    title:{
        type:String,
        required:true

    },
    description:{
        type:String,
        required:true
    },
    image:{
        url:{
            type:String,
        
            default:"you encountered a no image ok!!!!",
            set:(v)=> v===""? "you encountered a no image ok!!!!":v
        }
    },
    price:{
        type:Number,
        required:true
    },
    location:{
        type:String,
        required:true
    },country:{
        type:String,
        required:true
    }
})
 
 const Listing =mongoose.model("Listing",listingSchema);
 module.exports=Listing;