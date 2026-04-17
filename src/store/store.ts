// // src/store/store.ts
// import { configureStore } from '@reduxjs/toolkit';
// import { cartReducer } from './cartReducer';

// export const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//   },
// });

// // Types for Redux hooks
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// store.ts

// import {
//   legacy_createStore as createStore,
//   combineReducers,
//   applyMiddleware,
// } from 'redux';
// import { thunk } from 'redux-thunk'; // <-- named import
// import { cartReducer } from './cartReducer';

// const rootReducer = combineReducers({
//   cart: cartReducer,
// });

// export const store = createStore(rootReducer, applyMiddleware(thunk));

// export type RootState = ReturnType<typeof rootReducer>;
// export type AppDispatch = typeof store.dispatch;

// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './cart/cartSlice';
import { productsReducer } from './products/productSlice';
import { aiReducer } from './ai/aiSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    ai: aiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
