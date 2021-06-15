import { createSelector } from "reselect";

export const getLoading = (state) => state.loading;
export const getFilter = (state) => state.contactsBook.filter;
export const getContacts = (state) => state.contactsBook.contacts;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
