import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgRhythmFill = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M2 9h2v12H2V9zm6-6h2v18H8V3zm6 9h2v9h-2v-9zm6-6h2v15h-2V6z" />
  </Svg>
);

export default SvgRhythmFill;
