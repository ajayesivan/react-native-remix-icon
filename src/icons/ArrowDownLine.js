import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgArrowDownLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="m13 16.172 5.364-5.364 1.414 1.414L12 20l-7.778-7.778 1.414-1.414L11 16.172V4h2z" />
  </Svg>
);
export default SvgArrowDownLine;
