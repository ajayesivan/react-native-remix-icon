import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgTextSpacing = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M7 17h10v-2.5l3.5 3.5-3.5 3.5V19H7v2.5L3.5 18 7 14.5zm6-11v9h-2V6H5V4h14v2z" />
  </Svg>
);
export default SvgTextSpacing;
