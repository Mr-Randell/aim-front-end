import { configureStore } from "@reduxjs/toolkit";
import useReducer  from "./features/userSlice";
// import { assetsCoreApi } from "./services/assetsCore";

// import playerReducer from "./features/assetSlice";

export const store = configureStore ({
    reducer: {
        user: useReducer,
        // [ assetsCoreApi.reducerPath ]: assetsCoreApi.reducer,
        // player: playerReducer,
    },
    // middleware: ( getDefaultMiddleware ) => getDefaultMiddleware().concat( assetsCoreApi.middleware ),
});