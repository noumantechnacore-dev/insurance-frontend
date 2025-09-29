// insuranceSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InsuranceState {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  residenceAddress: string;
  city: string;
  areaZipCode: string;
  state: string;
  age: number;
}

const initialState: InsuranceState = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  residenceAddress: "",
  city: "",
  areaZipCode: "",
  state: "",
  age: 0,
};

const insuranceSlice = createSlice({
  name: "insurance",
  initialState,
  reducers: {
    setInsuranceData: (state, action: PayloadAction<Partial<InsuranceState>>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setInsuranceData } = insuranceSlice.actions;
export default insuranceSlice.reducer;
