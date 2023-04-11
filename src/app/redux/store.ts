import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import timezoneReducer from '../../features/timezone/timezoneSlice';

export const store = configureStore({
  reducer: {
    time: timezoneReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
