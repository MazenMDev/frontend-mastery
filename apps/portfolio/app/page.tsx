import Header from "@/components/Header";
import styles from "./page.module.css";
import Description from "@/components/Description";

function Home() {
  const hideDescription = true;

  return (
    <div className={styles.container}>
      <main style={{ color: "black", backgroundColor: "lightgray"}} className={styles.main}>
        <p>Hello, world!</p>
        <Header text="My Header" />
        {hideDescription && <Description />}
      </main>
    </div>
  );
}

export default Home;