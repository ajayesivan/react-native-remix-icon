import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgArrowUpSLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="m12 10.828-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z" />
  </Svg>
);

export default SvgArrowUpSLine;
