import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgPieChartFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M11 2.05V13h10.95c-.501 5.053-4.765 9-9.95 9-5.523 0-10-4.477-10-10 0-5.185 3.947-9.449 9-9.95m2 0A10 10 0 0 1 21.95 11H13z" />
  </Svg>
);
export default SvgPieChartFill;
