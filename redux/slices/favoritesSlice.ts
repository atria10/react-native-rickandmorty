import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

// Define a type for the slice state
type FavoritesI = {
  ids: number[];
};

// Define the initial state using that type
const initialState: FavoritesI = { ids: [] };

export const favoritesSlice = createSlice({
  name: "favorites",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    update: (state, { payload }: PayloadAction<number>) => {
      state.ids = state.ids.some((favorite) => favorite === payload)
        ? state.ids.filter((favorite) => favorite !== payload)
        : [...state.ids, payload];
    },
  },
});

export const { update } = favoritesSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectFavorites = (state: RootState) => state.favorites.ids;

export default favoritesSlice.reducer;
