import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgAlignVertically = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M3 11h18v2H3zm15 7v3h-2v-3h-3l4-4 4 4zM8 18v3H6v-3H3l4-4 4 4zM18 6h3l-4 4-4-4h3V3h2zM8 6h3l-4 4-4-4h3V3h2z" />
  </Svg>
);
export default SvgAlignVertically;
