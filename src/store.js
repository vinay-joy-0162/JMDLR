import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';
import rootReducer from './components/Admin/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {};

const middleware = [thunk];

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

var store = createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(...middleware)
    )
);
var persistor = persistStore(store);
export { store, persistor };

// export default store;