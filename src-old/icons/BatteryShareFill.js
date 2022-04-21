import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBatteryShareFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M14 2a1 1 0 011 1v1h3a1 1 0 011 1v6.2L15 8v3h-1c-2.142 0-4 1.79-4 4v3h2v-3c0-1.05.95-2 2-2h1v3l4-3.2V21a1 1 0 01-1 1H6a1 1 0 01-1-1V5a1 1 0 011-1h3V3a1 1 0 011-1h4z" />
    </Svg>
  );
}

export default SvgBatteryShareFill;
