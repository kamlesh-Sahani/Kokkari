import UserModel from "../../../../model/User";
import { NextResponse } from 'next/server'
import dbConnect from "../../../lib/dbConnect";

export async function POST(req) {
    try {
        await dbConnect();
        const reqBody = await req.json();
        const { name, email, password } = reqBody;
        const isExist = await UserModel.findOne({ email });
        if (isExist) {
            return NextResponse.json({
                message: "account is alredy exist",
                success: false
            }, { status: 400 })
        }

        const user = await UserModel.create({
            name,
            email,
            password
        });
        if (!user) {
            return NextResponse.json({
                message: "faild to register",
                success: false
            }, { status: 400 })
        }

        return NextResponse.json({
            message: "account is created ",
            success: true
        }, { status: 201 })


    } catch (error) {
        return NextResponse.json({
            message: "faild to register please try again",
            success: false
        }, { status: 500 })
    }
}