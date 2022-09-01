import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    add: (state, action) => {
      if (action.payload === "") return;
      state.value.push(action.payload);
    },
    deletes: (state, action) => {
      const newlist = [...state.value];
      newlist.splice(action.payload, 1);
      state.value = newlist;
    },
    up: (state, action) => {
      const item = state.value[action.payload];
      const newlist = [...state.value];
      newlist.splice(action.payload - 1, 0, item);
      newlist.splice(action.payload + 1, 1);
      state.value = newlist;
    },
    down: (state, action) => {
      const item = state.value[action.payload];
      const newlist = [...state.value];
      newlist.splice(action.payload + 2, 0, item);
      newlist.splice(action.payload, 1);
      state.value = newlist;
    },
    change: (state, action) => {
      if (!isNaN(action.payload)) {
        state.id_change = action.payload;
      } else {
        const newvalue = [...state.value];
        newvalue.splice(state.id_change, 1, action.payload);
        state.id_change = "";
        state.value = newvalue;
      }
    },
  },
});

export const { add, deletes, up, down, change } = counterSlice.actions;

export default counterSlice.reducer;
