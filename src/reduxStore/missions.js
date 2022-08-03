import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v3/missions';
const GET_DATA = 'space-travellers-hub/missions/GET_DATA';

export const getMissions = createAsyncThunk(GET_DATA, async () => {
  const response = await fetch(url);
  const res = await response.json();
  const all = res.map((item) => (
    {
      mission_name: item.mission_name,
      mission_id: item.mission_id,
      description: item.description,
    }
  ));
  return all;
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState: [{ mission_name: 'Rocket1', mission_id: 1, description: 'Lorem' }],
  extraReducers: {
    [getMissions.fulfilled]: (state, action) => action.payload,
  },
});

export const { allMissions } = missionsSlice.actions;
export default missionsSlice.reducer;