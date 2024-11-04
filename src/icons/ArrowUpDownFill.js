import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgArrowUpDownFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M12 8H8.001L8 20H6V8H2l5-5zm10 8-5 5-5-5h4V4h2v12z" />
  </Svg>
);
export default SvgArrowUpDownFill;
