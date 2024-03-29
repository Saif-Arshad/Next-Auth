import { NextResponse } from "next/server";
import ConnectDB from "../../../../models/mongodb";
import User from "../../../../models/Users"
import bcrypt from "bcrypt"


export async function POST(req){
    try {
        const{name,email,password}= await req.json()
        await ConnectDB();
        const Hash = await bcrypt.hash(password,10);
        await User.create({name:name,email:email,password:Hash});
   return NextResponse.json({message:"user Created"})
    } catch(err){
        console.log(err);
   return NextResponse.json({message:"user not able to Create"})

    }
}