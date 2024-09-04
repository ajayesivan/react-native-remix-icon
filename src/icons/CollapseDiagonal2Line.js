import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCollapseDiagonal2Line = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M9 4h2v7H4V9h3.586L3.293 4.707l1.414-1.414L9 7.586zm11 11h-3.586l4.293 4.293-1.414 1.414L15 16.414V20h-2v-7h7z" />
  </Svg>
);
export default SvgCollapseDiagonal2Line;
