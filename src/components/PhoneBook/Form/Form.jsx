import styles from "./Form.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
//redux imports
import { operations } from "../../../redux/ContactsBook";
import { useCallback } from "react";

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onSubmit: (data) => dispatch(operations.addContact(data)),
//   };
// };
// export default connect(null, mapDispatchToProps)(Form);

export default function Form() {
  const dispatch = useDispatch();
  const onSubmit = useCallback(
    (data) => dispatch(operations.addContact(data)),
    [dispatch]
  );
  const [user, setUser] = useState({
    name: "",
    number: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(user);
    resetForm();
  };
  const resetForm = () => {
    setUser({ name: "", number: "" });
  };
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          Enter your name
          <input
            type="text"
            name="name"
            value={user.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={handleChange}
            className={styles.input}
          />
        </label>
        <label className={styles.label}>
          Enter your phone number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            value={user.number}
            required
            onChange={handleChange}
            className={styles.input}
          />
        </label>

        <button type="submit" className={styles.addBtn}>
          add contact
        </button>
      </form>
    </div>
  );
}
// class Form extends Component {
//   state = {
//     name: "",
//     number: "",
//   };
//   handleChange = (event) => {
//     const { name, value } = event.currentTarget;
//     this.setState({
//       [name]: value,
//     });
//   };
//   handleSubmit = (event) => {
//     event.preventDefault();

//     this.props.onSubmit(this.state);

//     this.resetForm();
//   };
// resetForm = () => {
//   this.setState({
//     name: "",
//     number: "",
//   });
// };
//   render() {
// return (
//   <div className={styles.container}>
//     <form onSubmit={this.handleSubmit} className={styles.form}>
//       <label className={styles.label}>
//         Enter your name
//         <input
//           type="text"
//           name="name"
//           value={this.state.name}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//           required
//           onChange={this.handleChange}
//           className={styles.input}
//         />
//       </label>
//       <label className={styles.label}>
//         Enter your phone number
//         <input
//           type="tel"
//           name="number"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           value={this.state.number}
//           required
//           onChange={this.handleChange}
//           className={styles.input}
//         />
//       </label>

//       <button type="submit" className={styles.addBtn}>
//         add contact
//       </button>
//     </form>
//   </div>
// );
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onSubmit: (data) => dispatch(operations.addContact(data)),
//   };
// };
// export default connect(null, mapDispatchToProps)(Form);
