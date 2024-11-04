import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgTrafficLightFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M7 4V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1h3c0 2.5-2.5 3.5-3 3.5V10h3c0 2.5-2.5 3.5-3 3.5V16h3c0 2.5-2.5 3.5-3 3.5V21a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1.5c-.5 0-3-1-3-3.5h3v-2.5c-.5 0-3-1-3-3.5h3V7.5c-.5 0-3-1-3-3.5zm5 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
  </Svg>
);
export default SvgTrafficLightFill;
