import styled from "styled-components";

interface IMarking {
  deg?: number;
  bg?: string;
}

interface IClockHand {
  hand: string;
  hours: number;
  minutes: number;
  seconds: number;
}

const getClockHandStyle = ({ hand, hours, minutes, seconds }: IClockHand) => {
  switch (hand) {
    case "hour":
      return `width: 25%;
    height: 10px;
  transition: 1s ease;
    background: #161718; transform: rotate(${
      (hours % 12) * 30 + minutes / 2 + 90
    }deg);`;

    case "minute":
      return `width: 40%;
    height: 8px;
    background: #161718; transform: rotate(${minutes * 6 + 90}deg);`;

    case "second":
      return `width: 45%;
    height: 8px;
    background: #aa0f0a; transform: rotate(${seconds * 6 + 90}deg);`;
  }
};

export const ClockSC = styled.div`
  width: 30rem;
  height: 30rem;
  position: relative;
  padding: 2rem;
  border: 7px solid #282828;
  box-shadow: -4px -4px 10px rgba(67, 67, 67, 0.5),
    inset 4px 4px 10px rgba(0, 0, 0, 0.5),
    inset -4px -4px 10px rgba(67, 67, 67, 0.5), 4px 4px 10px rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  margin: 50px auto;
`;

export const MarkingSC = styled.div<IMarking>`
  content: "";
  position: absolute;
  width: 5px;
  height: 90%;
  background-color: ${({ bg }) => `${bg}`};
  z-index: 0;
  left: 50%;
  margin-top: -10px;
  ${({ deg }) => deg && `transform: rotate(${deg}deg)`};
`;

export const InnerClockFaceSC = styled.div`
  position: absolute;
  top: 10%;
  left: 10%;
  width: 80%;
  height: 80%;
  background: #ffffff;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  border-radius: 100%;
  z-index: 1;
`;

export const CircleSC = styled.div`
  content: "";
  position: absolute;
  top: 49%;
  left: 49%;
  width: 24px;
  height: 24px;
  margin-left: -9px;
  margin-top: -6px;
  border-radius: 18px;
  background: #161718;
  z-index: 15;
`;

export const ClockHandSC = styled.div<IClockHand>`
  position: absolute;
  ${(props) => getClockHandStyle(props)}
  top: 49%;
  right: 50%;
  border-radius: 6px;
  transform-origin: 100%;
  transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
  z-index: 5;
`;
