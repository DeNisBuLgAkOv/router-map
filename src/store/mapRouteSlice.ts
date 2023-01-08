import { createSlice } from '@reduxjs/toolkit';

const mapRouteSlice = createSlice({
    name: 'mapRoute',
    initialState: {
        mapRoutes: {
            list: [
                {
                    id: 1,
                    nameOrder: '№ 1',
                    coordinateFromLat: '59.84660399',
                    coordinateFromInt: '30.29496392',
                    coordinateToLat: '59.82934196',
                    coordinateToInt: '30.42423701'
                },
                {
                    id: 2,
                    nameOrder: '№ 2',
                    coordinateFromLat: '59.82934196',
                    coordinateFromInt: '30.42423701',
                    coordinateToLat: '59.82761295',
                    coordinateToInt: '30.41705607'
                },
                {
                    id: 3,
                    nameOrder: '№ 3',
                    coordinateFromLat: '59.83567701',
                    coordinateFromInt: '30.38064206',
                    coordinateToLat: '59.84660399',
                    coordinateToInt: '30.29496392'
                },
                {
                    id: 4,
                    nameOrder: '№ 4',
                    coordinateFromLat: '59.84660399',
                    coordinateFromInt: '30.29496392',
                    coordinateToLat: '59.82761295',
                    coordinateToInt: '30.41705607'
                },
                {
                    id: 5,
                    nameOrder: '№ 5',
                    coordinateFromLat: '59.83597701',
                    coordinateFromInt: '30.38064206',
                    coordinateToLat: '59.84660399',
                    coordinateToInt: '30.2946392'
                }
            ],
            waypoints: [],
            isLoading: false,
            idSelected: null
        }
    },
    reducers: {
        selectRoute(state, action) {
            const id = action.payload;
            state.mapRoutes.idSelected = id;
        },
        setWaypoints(state, action) {
            const waypoints = action.payload;
            state.mapRoutes.waypoints = waypoints;
        }
    }
});

export const {selectRoute, setWaypoints} = mapRouteSlice.actions;
export default mapRouteSlice.reducer;