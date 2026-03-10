import Header from "@/components/Header";
import styles from "./page.module.css";
import Description from "@/components/Description";
import Link from "next/dist/client/link";

function Home() {
  const hideDescription = true;

  return (
    <div className={styles.container}>
      <main style={{ color: "black", backgroundColor: "lightgray"}} className={styles.main}>
        <p>Hello, world!</p>
        <Header text="My Header" />
        {hideDescription && <Description />}
        <Link href="/about">Go to About</Link>
      </main>
    </div>
  );
}

export default Home;