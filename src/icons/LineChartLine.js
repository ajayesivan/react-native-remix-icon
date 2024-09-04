import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgLineChartLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M5 3v16h16v2H3V3zm15.293 3.293 1.414 1.414L16 13.414l-3-2.999-4.293 4.292-1.414-1.414L13 7.586l3 2.999z" />
  </Svg>
);
export default SvgLineChartLine;
