import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgItalic = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M15 20H7v-2h2.927l2.116-12H9V4h8v2h-2.927l-2.116 12H15z" />
  </Svg>
);
export default SvgItalic;
