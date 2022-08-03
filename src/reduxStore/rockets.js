import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getAllRocketsAsync = createAsyncThunk(
  'All Rockets',
  async () => {
    const response = await fetch('https://api.spacexdata.com/v3/rockets');
    const data = await response.json();
    const rocketData = data.map((item) => ({
      id: item.id,
      name: item.rocket_name,
      picha: item.flickr_images,
      des: item.description,
      type: item.rocket_type,
    }));
    return rocketData;
  },
);

const rocketSlice = createSlice({
  name: 'rockets',
  initialState: [{ name: 'mobutu', age: 23, occupation: 'servant' }],
  reducers: {
    addRocket: (state) => {
      const rock1 = { name: 'abuju', age: 33, occupation: 'servant' };
      return [...state, rock1];
    },
    makeReservation: (state, action) => {
      const selectedRocket = state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, reserved: true };
        }
        return item;
      });
      return selectedRocket;
    },
    cancelReservation: (state, action) => {
      const selectedRocket = state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, reserved: false };
        }
        return item;
      });
      return selectedRocket;
    },
  },
  extraReducers: {
    [getAllRocketsAsync.fulfilled]: (state, action) => action.payload,
  },
});

export const { addRocket, makeReservation, cancelReservation } = rocketSlice.actions;
export default rocketSlice.reducer;
