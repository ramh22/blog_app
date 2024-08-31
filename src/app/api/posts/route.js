import clientPromise from "@/app/lib/mongodb";
import { cookies } from "next/headers";


export async function Get(request) {
    const client = await clientPromise;
    const db = client.db();
    const news = await db.collection("news").find({}).toArray();
    return new Response(JSON.stringify(news), {status: 200});
}

export async function POST(request) {
    const client = await clientPromise;
    const db = client.db();
    const res = await db.collection("news").insertOne({});
    return await res.json();
    
}
export async function PUT(request) {
    
}