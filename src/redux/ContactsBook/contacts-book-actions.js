import { createAction } from "@reduxjs/toolkit";
// import axios from "axios";
// const shortid = require("shortid");
export const fetchContactRequest = createAction(
  "contacts-book/fetchContactRequest"
);
export const fetchContactSucces = createAction(
  "contacts-book/fetchContactSucces"
);
export const fetchContactError = createAction(
  "contacts-book/fetchContactError"
);

export const addContactRequest = createAction(
  "contacts-book/addContactRequest"
);
export const addContactSucces = createAction("contacts-book/addContactSucces");
export const addContactError = createAction("contacts-book/addContactError");

export const deleteContactRequest = createAction(
  "contacts-book/deleteContactRequest"
);
export const deleteContactSucces = createAction(
  "contacts-book/deleteContactSucces"
);
export const deleteContactError = createAction(
  "contacts-book/deleteContactError"
);

export const changeFilter = createAction("contacts-book/changeFilter");
