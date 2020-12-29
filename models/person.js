let mongoose=require('mongoose')

let personSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        default:"dhouha"
    },
    age:{
        type:Number,
        required:true,
        default:26
    },
    favoriteFoods :{
        type:[String],
        required:true,
        default:["salad"]
    }
})
module.exports = mongoose.model('Person',personSchema)