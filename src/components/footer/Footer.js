import styles from "./footer.module.css";

export default function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>Zayar Dev</div>
            <div className={styles.text}>
                Trojan creative thoughts agency © All rights reserved.
            </div>
        </div>
    );
}
