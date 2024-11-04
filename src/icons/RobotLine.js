import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgRobotLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M13 4.055c4.5.497 8 4.312 8 8.945v9H3v-9c0-4.633 3.5-8.448 8-8.945V1h2zM19 20v-7a7 7 0 1 0-14 0v7zm-7-2a5 5 0 1 1 0-10 5 5 0 0 1 0 10m0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
  </Svg>
);
export default SvgRobotLine;
