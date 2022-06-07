import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgMenuLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
  </Svg>
);

export default SvgMenuLine;
