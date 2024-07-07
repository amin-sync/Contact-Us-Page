import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={`${styles.Navigation} container`}>
      <div className="logo">
        <img src="/images/Nav-bar-image.png" alt="Nav bar logo" />
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navigation;
