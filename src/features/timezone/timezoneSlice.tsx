import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/redux/store";
import { config } from "../../app/config/config";

export interface ITimezone extends Record<string, any> {
  hour: string;
  minute: string;
  second: string;
}

export interface TimeState {
  timezone: ITimezone;
  status: "idle" | "loading" | "failed" | "success";
}

const initialState: TimeState = {
  timezone: {
    hour: "0",
    minute: "0",
    second: "0",
  },

  status: "idle",
};

const headers = { "X-Api-Key": `${config.timeApiKey}` };

export const setAsyncTimezone = createAsyncThunk(
  "time/setAsyncTimezone",
  async (zone: string) => {
    const res = await fetch(
      `${config.timeBaseApi}/v1/worldtime?timezone=${zone}`,
      {
        headers,
      }
    );
    const data = await res.json();

    return data;
  }
);

export const timezoneSlice = createSlice({
  name: "time",
  initialState,
  reducers: {
    setTimezone: (state, action) => {
      state.timezone = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setAsyncTimezone.pending, (state) => {
        state.status = "loading";
      })
      .addCase(setAsyncTimezone.fulfilled, (state, action) => {
        state.timezone = action.payload;
        state.status = "success";

      })
      .addCase(setAsyncTimezone.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { setTimezone } = timezoneSlice.actions;

export const selectTimezone = (state: RootState) => state.time.timezone;
export const selectTimezoneStatus = (state: RootState) => state.time.status;

export default timezoneSlice.reducer;
