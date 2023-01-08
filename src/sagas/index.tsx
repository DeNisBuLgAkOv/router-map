
import { takeEvery, select, put } from '@redux-saga/core/effects';
import { setWaypoints } from 'store/mapRouteSlice';
import { getWaypoints } from 'api';

export  function* workerSaga(): Generator<any> {
    const id = yield select(({ mapRoute }) => mapRoute.mapRoutes.idSelected);
    const list = yield select(({ mapRoute }) => mapRoute.mapRoutes.list || []);
    if (Array.isArray(list)) {
        const currentRequest: any = yield list.find((item: any)=> item?.id === id); 
        if (currentRequest && typeof currentRequest === 'object') {
            const {coordinateFromLat, coordinateFromInt, coordinateToLat, coordinateToInt} = currentRequest;
            const data: any = yield getWaypoints(`${coordinateFromLat},${coordinateFromInt};${coordinateToLat},${coordinateToInt}`);
            if (data && data.waypoints) {
                yield put(setWaypoints(data?.waypoints));
            }
        }   
    }
}

export function* watchClickSaga() {
    yield takeEvery('mapRoute/selectRoute', workerSaga);
}

export function* rootSaga() {
    yield watchClickSaga();
}