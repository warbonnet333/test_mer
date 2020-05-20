import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("contactsReduser/addContact");
export const deleteContact = createAction("contactsReduser/deleteContact");
export const updateContact = createAction("contactsReduser/updateContact");
export const fullContacts = createAction("contactsReduser/fullContacts");
