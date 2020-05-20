import { configureStore } from "@reduxjs/toolkit";
import contactsReduser from "./contactsReduser";
import createrReduser from "./createrReduser";
import editorReduser from "./editorReduser";
import userIdReduser from "./userIdReduser";
import pageReduser from "./pageReduser";

const store = configureStore({
  reducer: {
    contacts: contactsReduser,
    creater: createrReduser,
    editor: editorReduser,
    page: pageReduser,
    userToEdit: userIdReduser,
  },
});

export default store;
