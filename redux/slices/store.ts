import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { rickAndMortyApi } from "./rickAndMortySlice";
import favoritesReducer from "./favoritesSlice";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
    favorites:favoritesReducer
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rickAndMortyApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>