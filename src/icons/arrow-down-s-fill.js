import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgArrowDownSFill = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="m12 16-6-6h12z" />
  </Svg>
);

export default SvgArrowDownSFill;
