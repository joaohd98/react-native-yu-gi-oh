import {applyMiddleware, createStore, Store} from "redux";
import {persistStore} from "redux-persist";
import {Reducers} from "./reducers";
import {rootSaga, sagaMiddleware} from "./saga";

const store: Store = createStore(Reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export {store, persistor};
