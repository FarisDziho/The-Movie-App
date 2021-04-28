import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit'
import {showReducer} from './reducers/showReducer'
import thunkMiddleware, { ThunkMiddleware } from 'redux-thunk'
import { ThunkAction } from '../types/thunks';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { showActions } from '../types/actions';

export const rootReducer = combineReducers({
    showReducer
})

export type AppState = ReturnType<typeof rootReducer>;

const persistConfig = {
    key: 'root',
    storage,
}

export const persistedReducer = persistReducer<AppState,showActions>(persistConfig, rootReducer)



export const store = createStore(persistedReducer,applyMiddleware(thunkMiddleware as ThunkMiddleware<ThunkAction>));
export const persistor = persistStore(store);


