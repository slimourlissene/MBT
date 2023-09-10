import styles from "../../styles/home/Buttons.module.css";
import { useNavigate } from "react-router-dom";

export default function Buttons() {
  const navigation = useNavigate();

  return (
    <>
      <div className={styles.buttons}>
        <button onClick={() => navigation("/block")}>Commencer</button>
        <button>Comment ça marche ?</button>
      </div>
    </>
  );
}
