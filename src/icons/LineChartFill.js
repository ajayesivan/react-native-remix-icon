import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgLineChartFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M5 3v16h16v2H3V3zm14.94 2.94 2.12 2.12L16 14.122l-3-3-3.94 3.94-2.12-2.122L13 6.88l3 3z" />
  </Svg>
);
export default SvgLineChartFill;
