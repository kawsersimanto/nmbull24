import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import adminAuth from './ReduxFunction';
import baseApi from './Api/baseApi';
import forgotEmailReducer from './allSlice/otpSlice';
import formReducer from './allSlice/formslice';
import registerReducer from './allSlice/registerSlice';


// Persist configuration for `formData`
const formPersistConfig = {
  key: 'formData',
  storage,
};

// Persisted reducer for `formData`
const persistedFormReducer = persistReducer(formPersistConfig, formReducer);
const persistRegisterReducer = persistReducer(formPersistConfig, registerReducer);


// Persist configuration for `adminAuth`
const persistConfig = {
  key: 'root',
  storage,
};

// Persisted reducer for `adminAuth`
const persistedReducer = persistReducer(persistConfig, adminAuth);

export const store = configureStore({
  reducer: {
    forgotPass: forgotEmailReducer,
    Auth: persistedReducer,
    formData: persistedFormReducer, 
    register: persistRegisterReducer, 

    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
        ignoredPaths: ['Auth.somePathWithNonSerializableValues'],
      },
    }).concat(baseApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
