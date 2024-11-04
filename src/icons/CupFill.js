import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCupFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M5 3h15a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V4a1 1 0 0 1 1-1m13 2v3h2V5zM2 19h18v2H2z" />
  </Svg>
);
export default SvgCupFill;
