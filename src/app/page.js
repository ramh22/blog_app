
import Image from "next/image";
import styles from "../blog/blog.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Welcome to the Blog</h1>
      <p className={styles.body}>This is a blog post.</p>
      <a href="/post" className={styles.button}>Like</a>
    </main>
  );
}
