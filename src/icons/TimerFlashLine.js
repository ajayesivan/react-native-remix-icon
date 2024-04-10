import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTimerFlashLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M6.382 5.968A8.962 8.962 0 0112 4c2.125 0 4.078.736 5.618 1.968l1.453-1.453 1.414 1.414-1.453 1.453A9 9 0 113 13c0-2.125.736-4.078 1.968-5.618L3.515 5.93l1.414-1.414 1.453 1.453zM12 20a7 7 0 100-14 7 7 0 000 14zm1-8h3l-5 6.5V14H8l5-6.505V12zM8 1h8v2H8V1z" />
    </Svg>
  );
}

export default SvgTimerFlashLine;
