import { createReducer } from "@reduxjs/toolkit";
import {
  addContact,
  deleteContact,
  fullContacts,
  updateContact,
} from "./contactsAction";

export default createReducer([], {
  [fullContacts]: (state, action) => action.payload,
  [addContact]: (state, action) => [...state, action.payload],
  [deleteContact]: (state, action) =>
    state.filter((item) => item.id !== action.payload),
  [updateContact]: (state, action) => state
});
