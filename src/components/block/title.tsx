import styles from "../../styles/block/Title.module.css";

export default function Title() {
  return (
    <>
      <h1 className={styles.title}>Connectez-vous à votre compte Twitter.</h1>
      <p className={styles.title_paragraph}>
        Pour utiliser MBT, vous devez vous connecter à votre compte Twitter.
        Sans cela, nous serons dans l'incapacité de bloquer les utilisateurs
        pour vous.
      </p>
    </>
  );
}
