import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgMarkPenFill = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="m15.95 2.393 5.657 5.657a1 1 0 0 1 0 1.414l-7.779 7.779-2.12.707-1.415 1.414a1 1 0 0 1-1.414 0l-4.243-4.243a1 1 0 0 1 0-1.414l1.414-1.414.707-2.121 7.779-7.779a1 1 0 0 1 1.414 0zm.707 3.536-6.364 6.364 1.414 1.414 6.364-6.364-1.414-1.414zM4.282 16.889l2.829 2.829-1.414 1.414-4.243-1.414 2.828-2.829z" />
  </Svg>
);

export default SvgMarkPenFill;
