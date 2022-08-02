import { createSlice } from '@reduxjs/toolkit';

const rocketSlice = createSlice({
  name: 'rockets',
  initialState: [{ name: 'mobutu', age: 23, occupation: 'servant' }],
  reducers: {
    addRocket: (state) => {
      const rock1 = { name: 'abuju', age: 33, occupation: 'servant' };
      return [...state, rock1];
    },
  },
});

export const { addRocket } = rocketSlice.actions;
export default rocketSlice.reducer;
