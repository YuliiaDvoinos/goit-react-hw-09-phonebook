import styles from "../../pages/common.module.css";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import authOperations from "../../redux/auth/auth-operations";
import authSelectors from "../../redux/auth/auth-selectors";

import defaultAvatar from "./default.png";
import { useCallback } from "react";

export default function UserMenu() {
  const name = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();
  const onLogout = useCallback(() => {
    dispatch(authOperations.logOut());
  }, [dispatch]);
  return (
    <div className={styles.userContainer}>
      <div className={styles.userInfo}>
        <img
          src={defaultAvatar}
          alt="avatar"
          width="32"
          className={styles.avatar}
        />
        <span className={styles.name}>
          Welcome, <span className={styles.userNameSpan}> {name} </span>
        </span>
      </div>
      <button type="button" onClick={onLogout} className={styles.userBtn}>
        Logout
      </button>
    </div>
  );
}
// const mapStateToProps = (state) => ({
//   name: authSelectors.getUsername(state),
//   avatar: defaultAvatar,
// });

// const mapDispatchToProps = {
//   onLogout: authOperations.logOut,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
