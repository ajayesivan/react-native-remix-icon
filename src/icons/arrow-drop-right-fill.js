import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgArrowDropRightFill = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="m14 12-4 4V8z" />
  </Svg>
);

export default SvgArrowDropRightFill;
