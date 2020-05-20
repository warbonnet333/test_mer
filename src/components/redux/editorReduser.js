import { createReducer } from "@reduxjs/toolkit";
import { toggleEditor } from "./editorAction";

export default createReducer(false, {
  [toggleEditor]: (state, action) => action.payload,
});
