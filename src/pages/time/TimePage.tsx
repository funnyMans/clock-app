import { useEffect } from 'react';

import Clock from './components/Clock/Clock';
import Spinner from '../../app/components/Spinner';
import TimeZoneSelector from './components/TimeZoneSelector/TimeZoneSelector';

import { useAppDispatch, useAppSelector } from '../../app/redux/hooks';
import { TimePageSC } from './styled';
import {
  selectTimezoneStatus,
  setAsyncTimezone,
} from '../../features/timezone/timezoneSlice';

interface IProps {}

const defaultZone = 'Asia/Yerevan';

const TimePage = (props: IProps) => {
  const dispatch = useAppDispatch();
  const timeStatus = useAppSelector(selectTimezoneStatus);

  useEffect(() => {
    dispatch(setAsyncTimezone(defaultZone));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <TimePageSC>
      <TimeZoneSelector />
      {timeStatus === 'loading' && <Spinner />}
      <Clock />
    </TimePageSC>
  );
};

export default TimePage;
