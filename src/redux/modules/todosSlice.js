import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import todosAPI from "../../api/todos";

const initialState = {
  todos: [],
  isLoading: false,
  error: null,
};

export const _getTodos = createAsyncThunk(
  "todos/getTodos",
  async (payload, thunkAPI) => {
    console.log(payload, thunkAPI, 1);
    try {
      const { data } = await todosAPI.getTodos();
      console.log(2, data);
      return thunkAPI.fulfillWithValue(data);
    } catch (err) {
      console.log("error", err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: {
    [_getTodos.pending]: (state) => {
      state.isLoading = true;
    },
    [_getTodos.fulfilled]: (state, action) => {
      console.log(state, action, 3);
      state.isLoading = false;
      state.todos = action.payload;
    },
    [_getTodos.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// export const {} = todosSlice.actions;
export default todosSlice.reducers;
