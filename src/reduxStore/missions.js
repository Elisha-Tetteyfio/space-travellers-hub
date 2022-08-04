import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v3/missions';
const GET_DATA = 'space-travellers-hub/missions/GET_DATA';

export const getMissions = createAsyncThunk(GET_DATA, async () => {
  const response = await fetch(url);
  const res = await response.json();
  const all = res.map((item) => (
    {
      name: item.mission_name,
      id: item.mission_id,
      description: item.description,
    }
  ));
  return all;
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState: [{
    mission_name: 'Rocket1', mission_id: 1, description: 'Lorem', reserved: false,
  }],
  reducers: {
    joinMission: (state, action) => {
      const newState = state.map((mission) => {
        if (mission.id !== action.payload) {
          return mission;
        }
        return { ...mission, reserved: true };
      });
      return newState;
    },
    leaveMission: (state, action) => {
      const newState = state.map((mission) => {
        if (mission.id !== action.payload) {
          return mission;
        }
        return { ...mission, reserved: false };
      });
      return newState;
    },
  },
  extraReducers: {
    [getMissions.fulfilled]: (state, action) => action.payload,
  },
});

export const { joinMission, leaveMission } = missionsSlice.actions;
export default missionsSlice.reducer;
