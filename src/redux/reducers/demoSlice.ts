import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 0,
  data: {
    step1: null,
    step2: {
      documentImage: null,
    },
  },
  loading: {
    step2: false,
    step3: false,
  },
};
const demoSlice = createSlice({
  name: "demo",
  initialState,
  reducers: {
    setStep: (state, action) => {
      state.step = action.payload;
    },
    setLoading: (state, action) => {
      state.loading[action.payload.step] = action.payload.loading;
    },
    setDocumentImage: (state, action) => {
      state.data.step2.documentImage = action.payload;
    },
  },
});

export const { setStep, setLoading, setDocumentImage } = demoSlice.actions;
export default demoSlice.reducer;
