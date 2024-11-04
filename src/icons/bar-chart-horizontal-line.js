import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgBarChartHorizontalLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M12 3v2H3V3zm4 16v2H3v-2zm6-8v2H3v-2z" />
  </Svg>
);
export default SvgBarChartHorizontalLine;
