import {applyMiddleware, createStore, Store} from "redux";
import {persistStore} from "redux-persist";
import {Reducers} from "./reducers";
import {rootSaga, sagaMiddleware} from "./saga";
import logger from "redux-logger";

const middlewares = [sagaMiddleware, logger];

const store: Store = createStore(Reducers, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export {store, persistor};
