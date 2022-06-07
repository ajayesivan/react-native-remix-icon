import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgCheckboxBlankCircleFill = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Circle cx={12} cy={12} r={10} />
  </Svg>
);

export default SvgCheckboxBlankCircleFill;
