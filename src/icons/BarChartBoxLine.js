import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgBarChartBoxLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m1 2v14h16V5zm3 8h2v4H7zm4-6h2v10h-2zm4 3h2v7h-2z" />
  </Svg>
);
export default SvgBarChartBoxLine;
