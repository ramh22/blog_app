// import { useState } from "react";
'use client'
import React ,{useState}from "react";
import CardBlog from "./card";
import clientPromise from "../lib/mongodb";
const Blog=async()=>{
    const client=await clientPromise
    const db=client.db("next")
    const news=await db.collection("news").find({}).toArray()
    const [count,setCount]=useState(0)
    const hamdleIncrease=()=>{
        setCount(count+1)
    }
    const handleDecrease=()=>{
        setCount(count-1)
  
    }
return(
    <>
     <cardBlog title="first Blog" body="body of blog" />
     <div>
        <button onClick={hamdleIncrease}>+</button>
           <h1>{count}</h1>
         <button onClick={handleDecrease}>-</button>
     </div>

 </>
)
}
export default Blog