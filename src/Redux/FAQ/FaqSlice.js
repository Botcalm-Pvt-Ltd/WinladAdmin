import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  faq: [],
  addFaq: false,
  editFaq: false,
  deleteFaq: false,
  loading: false,
  error: false,
};

const faqSlice = createSlice({
  name: "faq",
  initialState,
  reducers: {
    //Get
    getfaqStart: (state) => {
      state.loading = true;
    },
    getfaqSuccess: (state, action) => {
      state.faq = action.payload;
      state.loading = false;
      state.error = false;
    },
    getfaqFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    //Add
    addfaqStart: (state) => {
      state.loading = true;
    },
    addfaqSuccess: (state, action) => {
      state.addFaq = true;
      state.loading = false;
      state.error = false;
    },
    addfaqFailure: (state, action) => {
      state.addFaq = false;
      state.loading = false;
      state.error = action.payload;
    },

    //Edit
    editfaqStart: (state) => {
      state.loading = true;
    },
    editfaqSuccess: (state, action) => {
      state.editFaq = true;
      state.loading = false;
      state.error = false;
    },
    editfaqFailure: (state, action) => {
      state.editFaq = false;
      state.loading = false;
      state.error = action.payload;
    },

    //Delete
    deletefaqStart: (state) => {
      state.loading = true;
    },
    deletefaqSuccess: (state, action) => {
      state.deleteFaq = true;
      state.loading = false;
      state.error = false;
    },
    deletefaqFailure: (state, action) => {
      state.deleteFaq = false;
      state.loading = false;
      state.error = action.payload;
    },

  },
});

export const {
  getfaqStart,
  getfaqSuccess,
  getfaqFailure,
  addfaqStart,
  addfaqSuccess,
  addfaqFailure,
  editfaqStart,
  editfaqSuccess,
  editfaqFailure,
  deletefaqStart,
  deletefaqSuccess,
  deletefaqFailure
} = faqSlice.actions;
export default faqSlice.reducer;
