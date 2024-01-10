import Image from "next/image";
import styles from "./home.module.css";
export default function Home() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>Creative Thoughts Agency</h1>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In quis suscipit enim. Donec et vehicula eros, nec
                        accumsan risus. Fusce scelerisque nulla sit amet sapien
                        hendrerit lacinia. 
                    </p>
                    <div className={styles.buttons}>
                        <button className={styles.button}>Learn More</button>
                        <button className={styles.button}>Contact</button>
                    </div>
                    <div className={styles.brands}>
                        <Image
                            src="/brands.png"
                            alt=""
                            fill
                            className={styles.brandImage}
                        />
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image
                        src="/hero.gif"
                        alt=""
                        fill
                        className={styles.heroImage}
                    />
                </div>
            </div>
        </>
    );
}
