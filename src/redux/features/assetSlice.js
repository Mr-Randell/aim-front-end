// import { createSlice } from "@reduxjs/toolkit";

// const assetSlice = createSlice({
//     name: 'player',
//     initialState,
//     reducers: {
//       setActiveSong: (state, action) => {
//         state.activeSong = action.payload.song;
  
//         if (action.payload?.data?.tracks?.hits) {
//           state.currentSongs = action.payload.data.tracks.hits;
//         } else if (action.payload?.data?.properties) {
//           state.currentSongs = action.payload?.data?.tracks;
//         } else {
//           state.currentSongs = action.payload.data;
//         }
  
//         state.currentIndex = action.payload.i;
//         state.isActive = true;
//       },
//     },
// });

// export const { setActiveSong } = assetSlice.actions;

// export default assetSlice.reducer;