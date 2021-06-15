import styles from "./common.module.css";

import { Component } from "react";
import { connect } from "react-redux";
import authOperations from "../redux/auth/auth-operations";
import authSelectors from "../redux/auth/auth-selectors";
import Home from "./Home.jsx";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;
    const { isAuthenticated } = this.props;
    return (
      <div className={styles.loginContainer}>
        {isAuthenticated ? (
          <Home />
        ) : (
          <>
            <h1 className={styles.loginTitle}>Login page</h1>
            <form
              className={styles.loginForm}
              autoComplete="off"
              onSubmit={this.handleSubmit}
            >
              <label className={styles.loginLabel}>
                Enter your email
                <input
                  className={styles.loginInput}
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                />
              </label>

              <label className={styles.loginLabel}>
                Enter your password
                <input
                  className={styles.loginInput}
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                />
              </label>

              <button type="submit" className={styles.loginBtn}>
                Login
              </button>
            </form>
          </>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});
const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
