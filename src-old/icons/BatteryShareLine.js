import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBatteryShareLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M14 2a1 1 0 011 1v1h3a1 1 0 011 1v2h-2V6h-4V4h-2v2H7v14h10v-3h2v4a1 1 0 01-1 1H6a1 1 0 01-1-1V5a1 1 0 011-1h3V3a1 1 0 011-1h4zm1 6l5 4-5 4v-3h-1c-1.054 0-2 .95-2 2v3h-2v-3a4 4 0 014-4h1V8z" />
    </Svg>
  );
}

export default SvgBatteryShareLine;
