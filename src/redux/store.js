import { configureStore } from "@reduxjs/toolkit";
// import { assetsCoreApi } from "./services/assetsCore";

// import playerReducer from "./features/assetSlice";

export const store = configureStore ({
    reducer: {
        // [ assetsCoreApi.reducerPath ]: assetsCoreApi.reducer,
        // player: playerReducer,
    },
    // middleware: ( getDefaultMiddleware ) => getDefaultMiddleware().concat( assetsCoreApi.middleware ),
});