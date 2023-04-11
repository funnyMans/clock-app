import { useEffect, useState } from 'react'

import { ClockHandSC } from '../styled';
import { useAppSelector } from '../../../../../app/redux/hooks';
import { selectTimezone } from '../../../../../features/timezone/timezoneSlice';

const ClockHands = () => {
    const timezone = useAppSelector(selectTimezone);

  const [seconds, setSeconds] = useState(Number(timezone.second));
  const [minutes, setMinutes] = useState(Number(timezone.minute));
  const [hours, setHours] = useState(Number(timezone.hour));

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((prev) => (prev < 59 ? prev + 1 : 0));
      seconds === 59 && setMinutes((prev) => (prev < 59 ? prev + 1 : 0));
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, [seconds]);

  useEffect(()=>{
    !minutes && setHours((prev) => (prev < 23 ? prev + 1 : 0));
  },[minutes])

  useEffect(() => {
    setSeconds(Number(timezone.second))
    setMinutes(Number(timezone.minute))
    setHours(Number(timezone.hour))
  }, [timezone]);
  return (
    <div>
        {Object.keys(timezone).map((key: string) => (
        <ClockHandSC
          key={key}
          hand={key}
          hours={hours}
          seconds={seconds}
          minutes={minutes}
        />
      ))}
    </div>
  )
}

export default ClockHands