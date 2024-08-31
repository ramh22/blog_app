import clientPromise from '@/app/lib/mongodb';
import React from "react";
import Card from "../blog/components/card";
import styles from "../blog/blog.module.css";

const post=async()=> {
  
    const client = await clientPromise;
    const db = client.db();
    const posts = await db.collection("posts").find({}).toArray();

  
  return (
    <div className={styles.container}>
      {posts.reverse().map((item) => (
        <card image={item.imageSrc} key={item._id} title={item.title} desctiption={item.desctiption} />
      ))}
    </div>
  );
};

export default post
