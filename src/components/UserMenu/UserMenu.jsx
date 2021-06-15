import styles from "../../pages/common.module.css";

import React from "react";
import { connect } from "react-redux";
import authOperations from "../../redux/auth/auth-operations";
import authSelectors from "../../redux/auth/auth-selectors";

import defaultAvatar from "./default.png";

// const styles = {
//   container: {
//     display: "flex",
//     alignItems: "center",
//   },
//   avatar: {
//     marginRight: 4,
//   },
//   name: {
//     fontWeight: 700,
//     marginRight: 12,
//   },
// };

const UserMenu = ({ avatar, name, onLogout }) => {
  return (
    <div className={styles.userContainer}>
      <div className={styles.userInfo}>
        <img src={avatar} alt="avatar" width="32" className={styles.avatar} />
        <span className={styles.name}>
          Welcome, <span className={styles.userNameSpan}> {name} </span>
        </span>
      </div>
      <button type="button" onClick={onLogout} className={styles.userBtn}>
        Logout
      </button>
    </div>
  );
};
const mapStateToProps = (state) => ({
  name: authSelectors.getUsername(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
