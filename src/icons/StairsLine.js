import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgStairsLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M15 3h6v18H3v-6h4v-4h4V7h4zm2 2v4h-4v4H9v4H5v2h14V5z" />
  </Svg>
);
export default SvgStairsLine;
