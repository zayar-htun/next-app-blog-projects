import Image from "next/image";
import styles from "./about.module.css"

export default function About() {
    return (
        <>
            <div className={styles.container}>
                <Image src="/about.png" alt="" fill/>
            </div>
        </>
    );
}
