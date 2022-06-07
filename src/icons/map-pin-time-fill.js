import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgMapPinTimeFill = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M13 11V6h-2v7h6v-2h-4zm5.364 6.364L12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0z" />
  </Svg>
);

export default SvgMapPinTimeFill;
