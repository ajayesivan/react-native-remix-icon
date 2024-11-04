import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgBatterySaverLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M14 2a1 1 0 0 1 1 1v1h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1zm-1 2h-2v2H7v14h10V6h-4zm0 5v3h3v2h-3v3h-2v-3H8v-2h3V9z" />
  </Svg>
);
export default SvgBatterySaverLine;
