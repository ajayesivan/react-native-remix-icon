import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBatteryLowFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M3 5h16a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1zm2 3v8h4V8H5zm16 1h2v6h-2V9z" />
    </Svg>
  );
}

export default SvgBatteryLowFill;
