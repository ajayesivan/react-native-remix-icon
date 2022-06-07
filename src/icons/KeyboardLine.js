import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgKeyboardLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M3 17h18v2H3v-2zm0-6h3v3H3v-3zm5 0h3v3H8v-3zM3 5h3v3H3V5zm10 0h3v3h-3V5zm5 0h3v3h-3V5zm-5 6h3v3h-3v-3zm5 0h3v3h-3v-3zM8 5h3v3H8V5z" />
  </Svg>
);

export default SvgKeyboardLine;
