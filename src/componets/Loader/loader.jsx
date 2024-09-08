import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className={styles.loader}>
      {/* Можете використати будь-який індикатор завантаження, наприклад CSS-анімацію */}
      <div className={styles.spinner}></div>
    </div>
  );
}

export default Loader;
