import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgTimerLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="m17.618 5.968 1.453-1.453 1.414 1.414-1.453 1.453A9 9 0 1 1 12 4c2.125 0 4.078.736 5.618 1.968M12 20a7 7 0 1 0 0-14 7 7 0 0 0 0 14M11 8h2v6h-2zM8 1h8v2H8z" />
  </Svg>
);
export default SvgTimerLine;
