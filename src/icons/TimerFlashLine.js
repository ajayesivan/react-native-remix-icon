import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgTimerFlashLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M6.382 5.968A8.96 8.96 0 0 1 12 4c2.125 0 4.078.736 5.618 1.968l1.453-1.453 1.414 1.414-1.453 1.453A9 9 0 1 1 3 13c0-2.125.736-4.078 1.968-5.618L3.515 5.93l1.414-1.414zM12 20a7 7 0 1 0 0-14 7 7 0 0 0 0 14m1-8h3l-5 6.5V14H8l5-6.505zM8 1h8v2H8z" />
  </Svg>
);
export default SvgTimerFlashLine;
