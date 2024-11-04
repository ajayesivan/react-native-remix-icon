import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgBikeLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M5.5 12H4V7H2V5h6v2H6v2.795l9.813-2.629L15.233 5H12V3h3.978a1 1 0 0 1 .988.741l1.553 5.796-1.932.517-.256-.956zM5 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8m13-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0 2a5 5 0 1 1 0-10 5 5 0 0 1 0 10" />
  </Svg>
);
export default SvgBikeLine;
