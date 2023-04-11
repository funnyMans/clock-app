import { useEffect } from "react";

import Clock from "./components/Clock/Clock";
import Spinner from "../../app/components/Spinner";
import TimeZoneSelector from "./components/TimeZoneSelector/TimeZoneSelector";

import { useAppDispatch, useAppSelector } from "../../app/redux/hooks";
import { TimePageSC } from "./styled";
import {
  selectTimezone,
  selectTimezoneStatus,
  setAsyncTimezone,
} from "../../features/timezone/timezoneSlice";

interface IProps {}

const TimePage = (props: IProps) => {
  const dispatch = useAppDispatch();
  const timezone = useAppSelector(selectTimezone);
  const timeStatus = useAppSelector(selectTimezoneStatus);

  useEffect(() => {
    dispatch(setAsyncTimezone("Asia/Yerevan"));
  }, []);
  return (
    <TimePageSC>
      <TimeZoneSelector />
      {timeStatus === "loading" && <Spinner />}
      <Clock />
    </TimePageSC>
  );
};

export default TimePage;
