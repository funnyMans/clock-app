import ClockHands from "./components/ClockHands";
import {
  ClockSC,
  MarkingSC,
  InnerClockFaceSC,
  CircleSC,
} from "./styled";

const sections = Array.from(Array(6).keys());

const Clock = () => {
  return (
    <ClockSC>
      {sections.map((section) => (
        <MarkingSC
          key={section}
          deg={section * 30}
          bg={section % 3 ? "#bdbdcb" : "#1df52f"}
        />
      ))}
      <CircleSC />
      <InnerClockFaceSC />
      <ClockHands />
    </ClockSC>
  );
};

export default Clock;
