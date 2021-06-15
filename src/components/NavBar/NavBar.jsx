import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import routes from "../../routes";
import AuthBar from "../AuthBar";
import UserMenu from "../UserMenu";
import authSelectors from "../../redux/auth/auth-selectors";
import styles from "./nav-bar.module.css";

const NavBar = ({ isAuthenticated }) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.nav}>
          <NavLink to="/" className={styles.home}>
            Home
          </NavLink>
          {isAuthenticated && (
            <NavLink to={routes.ContactsPage} className={styles.contacts}>
              Contacts
            </NavLink>
          )}
        </div>

        {isAuthenticated ? <UserMenu /> : <AuthBar />}
      </div>
    </header>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(NavBar);
