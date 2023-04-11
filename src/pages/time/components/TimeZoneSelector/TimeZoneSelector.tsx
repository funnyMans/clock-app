import { useAppDispatch } from "../../../../app/redux/hooks";
import { timezoneMock } from "../../../../app/mock/timezonesData";
import { setAsyncTimezone } from "../../../../features/timezone/timezoneSlice";
import "./style.css";

const TimeZoneSelector = () => {
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setAsyncTimezone(e.target.value));
  };

  return (
    <div className="select">
      <select
        name="timezone"
        id=""
        defaultValue="Asia/Yerevan"
        onChange={handleChange}
      >
        {timezoneMock.map((zone, idx) => (
          <option key={idx}>{zone}</option>
        ))}
      </select>
    </div>
  );
};

export default TimeZoneSelector;
