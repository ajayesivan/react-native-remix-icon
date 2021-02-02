import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBatterySaverLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M14 2a1 1 0 011 1v1h3a1 1 0 011 1v16a1 1 0 01-1 1H6a1 1 0 01-1-1V5a1 1 0 011-1h3V3a1 1 0 011-1h4zm-1 2h-2v2H7v14h10V6h-4V4zm0 5v3h3v2h-3v3h-2v-3H8v-2h3V9h2z" />
    </Svg>
  );
}

export default SvgBatterySaverLine;
