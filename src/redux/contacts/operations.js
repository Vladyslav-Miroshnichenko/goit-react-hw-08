import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { authInstance } from "../auth/operations";

axios.defaults.baseURL = "https://connections-api.goit.global";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkApi) => {
    try {
      const { data } = await authInstance.get("/contacts");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkApi) => {
    try {
      const { data } = await authInstance.delete(`/contacts/${id}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newItem, thunkApi) => {
    try {
      const { data } = await authInstance.post("/contacts", newItem);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("/contacts/logOut", async () => {
  return true;
});
