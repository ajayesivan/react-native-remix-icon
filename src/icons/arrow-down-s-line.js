import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgArrowDownSLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="m12 13.172 4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
  </Svg>
);

export default SvgArrowDownSLine;
