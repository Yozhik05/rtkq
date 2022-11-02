import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetch", async () => {
  let res = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  ).then((res) => res.json());
  return res;
});

const initialState = {
  users: []
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    createUser: (state, action) => {
      state.users.push({ name: action.payload, id: Math.random() });
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = [...state.users, ...action.payload];
    });
  }
});
export const { createUser } = userSlice.actions;

export default userSlice.reducer;
