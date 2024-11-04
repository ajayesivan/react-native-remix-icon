import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgBarChartFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M3 12h4v9H3zm14-4h4v13h-4zm-7-6h4v19h-4z" />
  </Svg>
);
export default SvgBarChartFill;
