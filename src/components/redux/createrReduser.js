import { createReducer } from "@reduxjs/toolkit";
import { toggleCreater } from "./createrAction";

export default createReducer(false, {
  [toggleCreater]: (state, action) => action.payload,
});
