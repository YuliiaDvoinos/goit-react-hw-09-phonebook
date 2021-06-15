import { NavLink } from "react-router-dom";
import styles from "./auth-bar.module.css";

const AuthBar = () => {
  return (
    <div className={styles.registrationContainer}>
      <NavLink to="./register" className={styles.authLink}>
        Register
      </NavLink>
      <NavLink to="./login" className={styles.authLink}>
        Login
      </NavLink>
    </div>
  );
};
export default AuthBar;
