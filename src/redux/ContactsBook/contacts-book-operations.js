import axios from "axios";
import {
  addContactRequest,
  addContactSucces,
  addContactError,
  deleteContactRequest,
  deleteContactSucces,
  deleteContactError,
  fetchContactRequest,
  fetchContactSucces,
  fetchContactError,
} from "./contacts-book-actions";

const fetchContacts = () => async (dispatch) => {
  dispatch(fetchContactRequest());
  try {
    const { data } = await axios.get("/contacts");
    dispatch(fetchContactSucces(data));
  } catch (error) {
    dispatch(fetchContactError(error));
  }
};

const addContact = (data) => (dispatch) => {
  const newContact = {
    ...data,
  };

  dispatch(addContactRequest());

  axios
    .post("/contacts", newContact)
    .then(({ data }) => dispatch(addContactSucces(data)))
    .catch((error) => dispatch(addContactError(error)));
};

const deleteContact = (contactId) => (dispatch) => {
  dispatch(deleteContactRequest());
  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactSucces(contactId)))
    .catch((error) => dispatch(deleteContactError(error)));
};

export default { addContact, deleteContact, fetchContacts };
