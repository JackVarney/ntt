import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ListState {
  limit: number;
  term: string;
}

const initialState: ListState = {
  limit: 10,
  term: "",
};

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    incrementLimit: (state) => {
      return {
        ...state,
        limit: state.limit + 10,
      };
    },
    resetLimit: (state) => {
      return {
        ...state,
        limit: 10,
      };
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.term = action.payload;
    },
  },
});

export const { incrementLimit, resetLimit, setSearchTerm } = listSlice.actions;
export default listSlice.reducer;
