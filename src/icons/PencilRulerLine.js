import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgPencilRulerLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M5 8v12h4V8zM3 7l4-5 4 5v15H3zm16 9v-2h-3v-2h3v-2h-2V8h2V6h-4v14h4v-2h-2v-2zM14 4h6a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1" />
  </Svg>
);
export default SvgPencilRulerLine;
