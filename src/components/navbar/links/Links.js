import Link from "next/link";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";

export default function Links() {
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
        <div className={styles.links}>
            {links.map(link => {
                return <NavLink item={link} key={link.title} />;
            })}
            {session ? (
                <>
                    {isAdmin && (
                        <NavLink item={{ title: "Admin", path: "/admin" }} />
                    )}
                    <button className={styles.logout}>Logout</button>
                </>
            ) : (
                <NavLink item={{ title: "Login", path: "/login" }} />
            )}
        </div>
    );
}
