import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgFlag2Line = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M4 17v5H2V3h19.138a.5.5 0 0 1 .435.748L18 10l3.573 6.252a.5.5 0 0 1-.435.748H4zM4 5v10h14.554l-2.858-5 2.858-5H4z" />
  </Svg>
);

export default SvgFlag2Line;
