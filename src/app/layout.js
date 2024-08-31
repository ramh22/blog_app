import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
const inter = Inter({ subsets: ["latin"] });//font
//html from metadata
export const metadata = {
  title: "Blog",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <header className="header"> */}
         < Header/>
        {/* </header> */}
        <main>Login</main>
        {/* <footer className="footer">  */}
          <Footer/>
        {/* </footer> */}
      </body>
    </html>
  );
}
