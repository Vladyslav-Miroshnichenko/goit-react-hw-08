import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkApi) => {
    try {
      const data = await axios.get(
        "https://6725ff39302d03037e6c089e.mockapi.io/contacts"
      );
      return data.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkApi) => {
    try {
      const data = await axios.delete(
        `https://6725ff39302d03037e6c089e.mockapi.io/contacts/${id}`
      );
      return data.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newItem, thunkApi) => {
    try {
      const data = await axios.post(
        "https://6725ff39302d03037e6c089e.mockapi.io/contacts",
        newItem
      );
      return data.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  "https://6725ff39302d03037e6c089e.mockapi.io/contacts/logOut",
  async () => {
    return true;
  }
);
