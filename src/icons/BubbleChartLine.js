import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgBubbleChartLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M16 16a3 3 0 1 1 0 6 3 3 0 0 1 0-6M6 12a4 4 0 1 1 0 8 4 4 0 0 1 0-8m10 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2M6 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4m8.5-12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7" />
  </Svg>
);
export default SvgBubbleChartLine;
