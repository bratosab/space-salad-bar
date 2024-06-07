import {
  PayloadAction,
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { Dressing } from "../models/Dressing";
import { SaladBase } from "../models/SaladeBase";
import { Topping } from "../models/Topping";
import { getToppings } from "../services/saladService";
import { RootState } from "./store";

export interface SaladState {
  toppings: Topping[];
  chosenToppings: Topping[];
  base?: SaladBase;
  dressing?: Dressing;
  loading: boolean;
}

const initialState: SaladState = {
  toppings: [],
  chosenToppings: [],
  loading: false,
};

export const loadToppings = createAsyncThunk("salad/loadToppings", async () => {
  const toppings = await getToppings();
  return { toppings };
});

const saladSlice = createSlice({
  initialState,
  name: "salad",
  reducers: {
    selectTopping: (state, action: PayloadAction<{ topping: Topping }>) => {
      state.chosenToppings.push(action.payload.topping);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadToppings.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadToppings.fulfilled, (state, action) => {
        state.toppings = action.payload.toppings;
        state.loading = false;
      })
      .addCase(loadToppings.rejected, (state) => {
        state.loading = false;
        console.error("Could not fetch toppings");
      });
  },
});

export const { selectTopping } = saladSlice.actions;
export const saladReducer = saladSlice.reducer;

export const selectTotalPrice = (state: RootState) => {
  console.trace();
  return state.salad.chosenToppings.reduce((sum, topping) => {
    return sum + topping.price;
  }, 0);
};

export const selectTotalPriceMemo = createSelector(
  (state: RootState) => state.salad.chosenToppings,
  (chosenToppings) => {
    console.trace();
    return chosenToppings.reduce((sum, topping) => {
      return sum + topping.price;
    }, 0);
  }
);
