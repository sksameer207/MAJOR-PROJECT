const mongoose=require("mongoose");
const Listing=require("../model/listing");
const initData=require("./data");

let MONGO_URL="mongodb://127.0.0.1:27017/wanderLust";

main().then((res)=>{
    console.log("connected to db");
}).catch((err)=>{
    console.log(err);

})

async function main() {
  await mongoose.connect(MONGO_URL);
    
}

const initDB=async()=>{
    await Listing.deleteMany({})
    await Listing.insertMany(initData.data)
    console.log("data wass initalized");
}
initDB();