import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchContactsData,
  postContactData,
  deleteContactData,
} from "services/contactsAPI";

const fetchContacts = createAsyncThunk(
    'contacts'
)