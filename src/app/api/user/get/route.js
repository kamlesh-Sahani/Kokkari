import UserModel from "../../../../model/User";
import {NextResponse} from "next/server";
import dbConnect from "../../../lib/dbConnect";

export async function POST(req){
    try {
        await dbConnect();
        const reqBody = await req.json();
       
        const {email,password}= reqBody;
        const isExist = await UserModel.findOne({email});
        if(!isExist){
            return NextResponse.json({
                message:"user is not found",
                success:false
            },{status:400});
        }

        const user =await UserModel.findOne({email,password});
        if(!user){
            return NextResponse.json({
                success:false,
                message:"email or password is wrong",
                
            },{status:400})
        }
        

        return NextResponse.json({
            success:true,
            message:"login successfuly",
            user
        },{status:200})
    } catch (error) {
        return NextResponse.json({
            message: "faild to login please try again",
            success: false
        }, { status: 500 })
    }
}
