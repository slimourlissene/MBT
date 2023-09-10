import styles from "../../styles/home/Title.module.css";
import "@fontsource/poppins";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/600.css";

export default function Title() {
  return (
    <>
      <h1 className={styles.title}>
        {" "}
        <span> MBT </span> : Bloquez en masse.{" "}
      </h1>
      <p className={styles.title_paragraph}>
        MassBlockTweet <span>(MBT)</span> est l'arme parfaite pour ceux qui
        veulent maîtriser leur expérience sur X. Avec <span>MBT</span>, vous
        pouvez{" "}
        <u>
          bloquer l'auteur d'un tweet ainsi que toutes les personnes l'ayant
          retweeté et liké
        </u>
        .
      </p>
    </>
  );
}
