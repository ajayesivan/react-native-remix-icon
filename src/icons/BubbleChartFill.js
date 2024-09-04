import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgBubbleChartFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M16 16a3 3 0 1 1 0 6 3 3 0 0 1 0-6M6 12a4 4 0 1 1 0 8 4 4 0 0 1 0-8m8.5-10a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11" />
  </Svg>
);
export default SvgBubbleChartFill;
