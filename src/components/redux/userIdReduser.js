import { createReducer } from "@reduxjs/toolkit";
import { addUserId } from "./userIdAction";

export default createReducer(null, {
  [addUserId]: (state, action) => action.payload,
});
