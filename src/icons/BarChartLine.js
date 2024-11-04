import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgBarChartLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M3 12h2v9H3zm16-4h2v13h-2zm-8-6h2v19h-2z" />
  </Svg>
);
export default SvgBarChartLine;
