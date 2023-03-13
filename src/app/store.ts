import { combineReducers, legacy_createStore } from 'redux'
import { appReducer } from './app-reducer'
import { authReducer } from '../features/Login/auth-reducer'

const rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer
})

export const store = legacy_createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;