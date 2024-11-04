import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgDoorLockBoxLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m1 2v14h14V5zm6 7.792a2.5 2.5 0 1 1 2 0V16h-2z" />
  </Svg>
);
export default SvgDoorLockBoxLine;
