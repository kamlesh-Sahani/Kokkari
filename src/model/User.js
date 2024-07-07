import mongoose,{Schema} from 'mongoose';
const userSchema = new Schema({
    name:{
        type:String,
        required:[true,"please enter the name"]
    },
    email:{
        type:String,
        required:[true,"please enter the email"]
    },
    password:{
        type:String,
        required:[true,"please enter the password"]
    }
},{timestamps:true});


const  UserModel = mongoose.models.User || mongoose.model("User",userSchema);
export default UserModel;