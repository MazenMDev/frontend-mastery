import styles from "../app/page.module.css";

type HeaderParams = {
  text: string;
};

function Header(props: HeaderParams) {
  return (
    <p className={styles.title}>{props.text}</p>
  )
}

export default Header;