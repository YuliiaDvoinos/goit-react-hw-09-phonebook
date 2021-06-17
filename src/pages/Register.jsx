import styles from "./common.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import authOperations from "../redux/auth/auth-operations";
import authSelectors from "../redux/auth/auth-selectors";
import Home from "./Home.jsx";

export default function Register() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  const [registerData, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(authOperations.register(registerData));
    resetForm();
  };
  const resetForm = () => {
    setData({ name: "", email: "", password: "" });
  };
  return (
    <div>
      {isLoggedIn ? (
        <Home />
      ) : (
        <div className={styles.registrationContainer}>
          <h1 className={styles.registrationTitle}>Registration page</h1>

          <form
            className={styles.registrationForm}
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <label className={styles.registrationLabel}>
              Enter your name
              <input
                className={styles.registrationInput}
                type="text"
                name="name"
                value={registerData.name}
                onChange={handleChange}
              />
            </label>

            <label className={styles.registrationLabel}>
              Enter your email address
              <input
                className={styles.registrationInput}
                type="email"
                name="email"
                value={registerData.email}
                onChange={handleChange}
              />
            </label>

            <label className={styles.registrationLabel}>
              Enter your password
              <input
                className={styles.registrationInput}
                type="password"
                name="password"
                value={registerData.password}
                onChange={handleChange}
              />
            </label>

            <button className={styles.registrationBtn} type="submit">
              Register
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
// class Register extends Component {
//   state = {
// name: "",
// email: "",
// password: "",
//   };
//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();

//     this.props.onRegister(this.state);

//     this.setState({ name: "", email: "", password: "" });
//   };
//   render() {
//     const { name, email, password } = this.state;
//     const { isAuthenticated } = this.props;

//     return (
// <div>
//   {isAuthenticated ? (
//     <Home />
//   ) : (
//     <div className={styles.registrationContainer}>
//       <h1 className={styles.registrationTitle}>Registration page</h1>

//       <form
//         className={styles.registrationForm}
//         autoComplete="off"
//         onSubmit={this.handleSubmit}
//       >
//         <label className={styles.registrationLabel}>
//           Enter your name
//           <input
//             className={styles.registrationInput}
//             type="text"
//             name="name"
//             value={name}
//             onChange={this.handleChange}
//           />
//         </label>

//         <label className={styles.registrationLabel}>
//           Enter your email address
//           <input
//             className={styles.registrationInput}
//             type="email"
//             name="email"
//             value={email}
//             onChange={this.handleChange}
//           />
//         </label>

//         <label className={styles.registrationLabel}>
//           Enter your password
//           <input
//             className={styles.registrationInput}
//             type="password"
//             name="password"
//             value={password}
//             onChange={this.handleChange}
//           />
//         </label>

//         <button className={styles.registrationBtn} type="submit">
//           Register
//         </button>
//       </form>
//     </div>
//   )}
// </div>
//     );
//   }
// }
// const mapStateToProps = (state) => ({
//   isAuthenticated: authSelectors.getIsAuthenticated(state),
// });
// const mapDispatchToProps = {
//   onRegister: authOperations.register,
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Register);
