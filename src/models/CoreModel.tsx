import {createSlice} from '@reduxjs/toolkit';

interface ICore {
  theme?: string;
  language?: string;
  isShowWelcomeScreen?: boolean;
  isLoading?: boolean;
}

export const CoreModel = createSlice({
  name: 'CORE',
  initialState: {
    theme: 'dark',
    language: 'eng',
    isShowWelcomeScreen: true,
    isLoading: false,
  },
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setIsShowWelcomeScreen: (state, action) => {
      state.isShowWelcomeScreen = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const CORE_ACTIONS = CoreModel.actions;
export const CORE_SELECTOR = (state: {CORE: ICore}) => state.CORE;
export const CORE_REDUCER = CoreModel.reducer;
