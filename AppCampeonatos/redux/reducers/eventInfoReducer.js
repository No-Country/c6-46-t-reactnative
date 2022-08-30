import { createSlice } from '@reduxjs/toolkit';

export const eventInfoSlice = createSlice({
  name: 'eventInfo',
  initialState: {
    id: '',
    name: '',
    description: '',
    location: '',
    startDate: '',
    endDate: '',
    inscriptionDate: '',
    gameMode: {},
    categories: {},
    ages: {},
    eliminatories: {},
  },
  reducers: {
    setID: (state, input) => {
      state.id = input.payload;
    },
    setName: (state, input) => {
      state.name = input.payload;
    },
    setDescription: (state, input) => {
      state.description = input.payload;
    },
    setLocation: (state, input) => {
      state.location = input.payload;
    },
    setStartDate: (state, input) => {
      state.startDate = input.payload;
    },
    setEndDate: (state, input) => {
      state.endDate = input.payload;
    },
    setInscriptionDate: (state, input) => {
      state.inscriptionDate = input.payload;
    },
    setGameMode: (state, input) => {
      state.gameMode = { ...state.gameMode, ...input.payload };
    },
    setCategories: (state, input) => {
      state.categories = { ...state.categories, ...input.payload };
    },
    setEliminatories: (state, input) => {
      state.eliminatories = { ...state.eliminatories, ...input.payload };
    },
    setAges: (state, input) => {
      state.ages = { ...state.ages, ...input.payload };
    },
    setOrganizer: (state, input) => {
      state.organizer = input.payload;
    },
  },
});

export const {
  setID,
  setName,
  setDescription,
  setLocation,
  setStartDate,
  setEndDate,
  setInscriptionDate,
  setGameMode,
  setCategories,
  setEliminatories,
  setOrganizer,
  setAges,
} = eventInfoSlice.actions;

export const getID = (state) => state.eventInfo.id;
export const getName = (state) => state.eventInfo.name;
export const getDescription = (state) => state.eventInfo.description;
export const getLocation = (state) => state.eventInfo.location;
export const getStartDate = (state) => state.eventInfo.startDate;
export const getEndDate = (state) => state.eventInfo.endDate;
export const getInscriptionDate = (state) => state.eventInfo.inscriptionDate;
export const getGameMode = (state) => state.eventInfo.gameMode;
export const getCategories = (state) => state.eventInfo.categories;
export const getEliminatories = (state) => state.eventInfo.eliminatories;
export const getAges = (state) => state.eventInfo.ages;
export const getOrganizer = (state) => state.eventInfo.organizer;

export default eventInfoSlice.reducer;
