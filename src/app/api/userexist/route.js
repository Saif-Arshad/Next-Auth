import { NextResponse } from 'next/server';
import ConnectDB from '../../../../models/mongodb'
import User from "../../../../models/Users"
export async function POST (req){
    try {
        await ConnectDB();
        const {email}= await req.json();
     const Data=   await User.findOne({email}).select('_id')
console.log(Data);
return NextResponse.json({Data})

    } catch (error) {
        console.log(error);
    }
}