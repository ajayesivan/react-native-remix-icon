import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTimerFlashFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M6.382 5.968A8.962 8.962 0 0112 4c2.125 0 4.078.736 5.618 1.968l1.453-1.453 1.414 1.414-1.453 1.453a9 9 0 11-14.064 0L3.515 5.93l1.414-1.414 1.453 1.453zM13 12V7.495L8 14h3v4.5l5-6.5h-3zM8 1h8v2H8V1z" />
    </Svg>
  );
}

export default SvgTimerFlashFill;
