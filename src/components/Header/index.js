import React from "react"
import classes from"./header.module.css"
import { menuItems } from "./menuItems.js";
import NavLink from "./NavLink";

const Header = () => {
  return (<>
    <header className={classes.container}>
      {/* <h1>Blog</h1> */}
      {/* <div>
      <a href="/">Home</a>
      <a href="/blog">Blog</a>
      <a href="/about">about</a>
      <a href="/contactus">contct us</a>
      <a href="/login">login</a>
      </div> */}
      {menuItems.map((item) => (
        <NavLink href={item.href} label={item.label} />
      ))}
    </header>
    </>
  );
};
export default Header;