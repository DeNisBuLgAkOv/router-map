import { configureStore } from '@reduxjs/toolkit';
import mapRouteSlice from './mapRouteSlice';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from 'sagas';
const saga = createSagaMiddleware();
export default configureStore({
    reducer: {
        mapRoute: mapRouteSlice
    },
    middleware: [saga]
});

saga.run(rootSaga)