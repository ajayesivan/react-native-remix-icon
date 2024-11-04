import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSpeakerLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M5 4v16h14V4zM4 2h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m8 15a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m0 2a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9m0-10.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
  </Svg>
);
export default SvgSpeakerLine;
