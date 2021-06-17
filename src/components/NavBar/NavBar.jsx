import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import routes from "../../routes";
import AuthBar from "../AuthBar";
import UserMenu from "../UserMenu";
import authSelectors from "../../redux/auth/auth-selectors";
import styles from "./nav-bar.module.css";

export default function NavBar() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.nav}>
          <NavLink to="/" className={styles.home}>
            Home
          </NavLink>
          {isLoggedIn && (
            <NavLink to={routes.ContactsPage} className={styles.contacts}>
              Contacts
            </NavLink>
          )}
        </div>

        {isLoggedIn ? <UserMenu /> : <AuthBar />}
      </div>
    </header>
  );
}
// const mapStateToProps = (state) => ({
//   isAuthenticated: authSelectors.getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(NavBar);
