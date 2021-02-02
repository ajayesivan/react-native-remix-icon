import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBatterySaverFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M14 2a1 1 0 011 1v1h3a1 1 0 011 1v16a1 1 0 01-1 1H6a1 1 0 01-1-1V5a1 1 0 011-1h3V3a1 1 0 011-1h4zm-1 7h-2v3H8v2h3v3h2v-3h3v-2h-3V9z" />
    </Svg>
  );
}

export default SvgBatterySaverFill;
