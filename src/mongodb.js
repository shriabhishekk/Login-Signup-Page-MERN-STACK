const mongoose=require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/LoginSignupTutorial")
.then(()=>{
    console.log("MongoDb connected")
})

.catch(()=>{
    console.log("Failed to connect")
})

const LogInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection=new mongoose.model("Collection1",LogInSchema)

module.exports=collection