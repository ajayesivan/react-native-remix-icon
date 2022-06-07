import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgArrowDropUpLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="m12 11.828-2.828 2.829-1.415-1.414L12 9l4.243 4.243-1.415 1.414L12 11.828z" />
  </Svg>
);

export default SvgArrowDropUpLine;
