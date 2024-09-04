import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgRefundLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M20.005 8V5h-16v3zm0 2h-16v9h16zm-17-7h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m8 11h6v2h-10.5l4.5-4.5z" />
  </Svg>
);
export default SvgRefundLine;
