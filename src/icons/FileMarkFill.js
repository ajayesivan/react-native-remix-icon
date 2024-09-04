import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgFileMarkFill = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M21 2.992v18.016a1 1 0 0 1-.993.992H3.993A.993.993 0 0 1 3 21.008V2.992A1 1 0 0 1 3.993 2h16.014c.548 0 .993.444.993.992M7 4v9l3.5-2 3.5 2V4z" />
  </Svg>
);
export default SvgFileMarkFill;
