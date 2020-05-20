import { createReducer } from "@reduxjs/toolkit";
import { next, prev } from "./pageActions";

export default createReducer(0, {
  [next]: (state, action) => state + 1,
  [prev]: (state, action) => state - 1,
});
