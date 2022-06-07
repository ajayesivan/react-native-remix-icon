import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgArrowRightDownLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M14.59 16.004 5.982 7.397l1.414-1.414 8.607 8.606V7.004h2v11h-11v-2z" />
  </Svg>
);

export default SvgArrowRightDownLine;
