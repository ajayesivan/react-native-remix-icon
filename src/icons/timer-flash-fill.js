import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgTimerFlashFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M6.382 5.968A8.96 8.96 0 0 1 12 4c2.125 0 4.078.736 5.618 1.968l1.453-1.453 1.414 1.414-1.453 1.453A9 9 0 1 1 3 13c0-2.125.736-4.078 1.968-5.618L3.515 5.93l1.414-1.414zM13 12V7.495L8 14h3v4.5l5-6.5zM8 1h8v2H8z" />
  </Svg>
);
export default SvgTimerFlashFill;
