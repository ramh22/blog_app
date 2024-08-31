import React ,{useState}from "react";
import styles from "./form.module.css";
import clientPromise from "@/app/lib/mongodb";
import { revalidatePath } from "next/cache";
import { redirect } from "next/dist/server/api-utils";
import {cloudinary} from "@/app/lib/cloudinary";

cloudinary.config({
        cloud_name: "dumhajjym",
        api_key: "765439877984324",
        api_secret: "9FAf_eunY2ORUiZRBKdqQjmSa88",
    });

const AddPost = () => {
    const create = async(FormData) => {
        "use server"
        const file = FormData.get("image") ;
        const arrayBuffer = await file.arrayBuffer();
        const buffer = new Uint8Array(arrayBuffer);
        const imageRes=await new Promise((resolve, reject) => {
            cloudinary.uploader.upload_stream({ tags: ['nextjs-server-actions-upload-sneakers'] }, (Error, result) => {
            
            if(Error){
                reject(error)
                return;
            }
            resolve(result)
    }).end(buffer)
}) ;
const title=FormData.get("title")
const description=FormData.get("description")
const client = await clientPromise
const db = client.db()
const res = await db.collection("images").insertOne({ title, description })


        revalidatePath("/posts")
        redirect("/posts")
    };
    return (
        <form className={styles.form}> action={create}
        <div className={styles.formGroup}>
            <label htmlFor="title">Title:</label>
            <input className={styles.input} type="text" name="title" id="title" />
        </div>
        <div className={styles.formGroup}>
            <label htmlFor="description">description:</label>
            <textarea 
            className={styles.textarea}
            type="text"
            name="description"
            id="description"
            />
            
        </div>
        <div className={styles.formGroup}>
            <label htmlFor="image">Title:</label>
            <input 
              className={styles.fileInput}
                type="file"
                name="image"
                id="image"
                />
        </div>

        <button className={styles.button}>Submit</button>
    </form>
    
    )
}
