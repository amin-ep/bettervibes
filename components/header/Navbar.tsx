import React from "react";
import NavLink from "./NavLink";
import styles from "./Navbar.module.css";
import clsx from "clsx";

function Navbar() {
  return (
    <div className="hidden items-center justify-center md:flex">
      <nav className={clsx("relative flex items-center py-2", styles.nav)}>
        <NavLink className={styles["nav-item"]} href="/">
          Home
        </NavLink>
        <NavLink className={styles["nav-item"]} href="/tracks">
          Tracks
        </NavLink>
        <NavLink className={styles["nav-item"]} href="/albums">
          Albums
        </NavLink>
        <NavLink className={styles["nav-item"]} href="/contact">
          Contact
        </NavLink>
        <NavLink className={styles["nav-item"]} href="/about">
          About
        </NavLink>
        <div className={styles.dot}></div>
      </nav>
    </div>
  );
}

export default Navbar;
