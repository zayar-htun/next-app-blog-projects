"use client";

import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import { useState } from "react";

export default function Links() {
    const [open, setOpen] = useState(false);
    const links = [
        {
            title: "Homepage",
            path: "/",
        },
        {
            title: "About",
            path: "/about",
        },
        {
            title: "Contact",
            path: "/contact",
        },
        {
            title: "Blog",
            path: "/blog",
        },
    ];

    const session = true;
    const isAdmin = true;
    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map(link => {
                    return <NavLink item={link} key={link.title} />;
                })}
                {session ? (
                    <>
                        {isAdmin && (
                            <NavLink
                                item={{ title: "Admin", path: "/admin" }}
                            />
                        )}
                        <button className={styles.logout}>Logout</button>
                    </>
                ) : (
                    <NavLink item={{ title: "Login", path: "/login" }} />
                )}
            </div>
            <div className={styles.menu}>
                <button
                    onClick={() => {
                        setOpen(prev => !prev);
                    }}
                >
                    Menu
                </button>
            </div>

            {open && (
                <div className={styles.mobileLink}>
                    {links.map(link => {
                        return <NavLink item={link} key={link.title} />;
                    })}
                </div>
            )}
        </div>
    );
}
