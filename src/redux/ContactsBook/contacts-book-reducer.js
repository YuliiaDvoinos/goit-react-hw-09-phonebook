import { combineReducers } from "redux";
import {
  addContactRequest,
  addContactSucces,
  addContactError,
  deleteContactRequest,
  deleteContactSucces,
  deleteContactError,
  changeFilter,
  fetchContactRequest,
  fetchContactSucces,
  fetchContactError,
} from "./contacts-book-actions";

import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
  filter: "",
  loading: false,
};
const contacts = createReducer(initialState.contacts, {
  [fetchContactSucces]: (_, { payload }) => {
    return payload;
  },
  [addContactSucces]: (state, { payload }) => {
    const isNotUnique = state.find((contact) => contact.name === payload.name);
    if (isNotUnique) {
      alert(`${payload.name} is alredy in contacts`);
    } else {
      return [...state, payload];
    }
  },
  [deleteContactSucces]: (state, { payload }) => {
    return state.filter(({ id }) => id !== payload);
  },
});

const filter = createReducer(initialState.filter, {
  [changeFilter]: (_, { payload }) => {
    //нада проверка на отстутсвие нужного номера

    // console.log(state.contacts.map((contact) => contact.name.include(payload)));
    return payload;
  },
});
const loading = createReducer(false, {
  [fetchContactRequest]: () => true,
  [fetchContactSucces]: () => false,
  [fetchContactError]: () => false,
  [addContactRequest]: () => true,
  [addContactSucces]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSucces]: () => false,
  [deleteContactError]: () => false,
});
export default combineReducers({
  contacts,
  filter,
  loading,
});

// const contacts = (state = initialState.contacts, { type, payload }) => {
//   switch (type) {
//     case types.ADD_CONTACT:
//       const isNotUnique = state.find(
//         (contact) => contact.name === payload.name
//       );
//       if (isNotUnique) {
//         alert(`${payload.name} is alredy in contacts`);
//       } else {
//         return [...state, payload];
//       }

//     case types.DELETE_CONTACT:
//       return state.filter(({ id }) => id !== payload);
//     default:
//       return state;
//   }
// };
// const filter = (state = initialState.filter, { type, payload }) => {
//   switch (type) {
//     case "contacts-book/changeFilter":
//       return payload;

//     default:
//       return state;
//   }
// };
