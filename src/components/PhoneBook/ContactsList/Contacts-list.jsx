import styles from "./List.module.css";
//redux imports
import { connect } from "react-redux";
import {
  getFilteredContacts,
  operations,
} from "../../../redux/ContactsBook/index";
import authSelectors from "../../../redux/auth/auth-selectors";
//components import
import Message from "../Message/Message";
import Filter from "../Filter";

const ContactsList = ({ contacts, onDelete, isAuthenticated }) => {
  const murkup = (
    <>
      <div className={styles.contactsListContainer}>
        <Filter />

        <ul className={styles.list}>
          {contacts.map(({ id, name, number }) => {
            return (
              <li key={id} className={styles.item}>
                <div className={styles.itemDetailsContainer}>
                  <p className={styles.contactsDetails}>{name}</p>
                  <p className={styles.contactsDetails}>{number}</p>
                </div>
                <button
                  type="button"
                  className={styles.deleteBtn}
                  onClick={() => onDelete(id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
  if (contacts.length < 1) {
    return (
      <div className={styles.contactsListContainer}>
        <Filter />
        <Message />
      </div>
    );
  }
  return murkup;
};

const mapStateToProps = (state) => ({
  contacts: getFilteredContacts(state),
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});
const mapDispatchToProps = (dispatch) => {
  return {
    onDelete: (id) => dispatch(operations.deleteContact(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
