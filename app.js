const express=require("express");
const app=express();
const mongoose = require('mongoose');
const path=require("path")
const Listing =require("../MAJOR PROJECT/model/listing");
let port=8080;
let MONGO_URL="mongodb://127.0.0.1:27017/wanderLust";
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));


main().then((res)=>{
    console.log("connected to db");
}).catch((err)=>{
    console.log(err);

})

async function main() {
  await mongoose.connect(MONGO_URL);
    
}
//index route
app.get("/listings",async(req,res)=>{
    const alllistings=await Listing.find({});
    res.render("./listings/index.ejs",{alllistings});

})
//new route
app.get("/listings/new",async(req,res)=>{
    res.render("./listings/new.ejs");

})


//show route
app.get("/listings/:id",async (req,res)=>{
   
    let {id}= req.params;
    const listing=await Listing.findById(id);
    res.render("./listings/show.ejs",{listing});

})
//create route
app.post("/listings",async (req,res)=>{
    // let listing=req.body.listing
    const newListing= new Listing(req.body.listing)
    await newListing.save();
    res.redirect("/listings");
   
})



app.get("/",(req,res)=>{
    console.log("yes abbe");
    res.send("hey abbe");
})

app.listen(port,()=>{
    console.log("server started at port 8080");
})







// app.get("/testing",async(req,res)=>{
//     const sample =new Listing({
//         title:"villa",
//         description:"this is villa",
//         price:120,
//         location:"goa",
//         country:"india"
//     })
//     await sample.save();
//     console.log("samle was saved")
//     res.send("sucess")
// })