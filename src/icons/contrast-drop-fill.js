import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgContrastDropFill = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M5.636 6.636 12 .272l6.364 6.364a9 9 0 1 1-12.728 0zM7.05 8.05A7 7 0 0 0 12.004 20L12 3.1 7.05 8.05z" />
  </Svg>
);

export default SvgContrastDropFill;
