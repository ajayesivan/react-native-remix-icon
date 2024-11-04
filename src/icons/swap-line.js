import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSwapLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M12.005 22.003c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10m0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16m-5-11 3-3.5 3 3.5h-2v4h-2v-4zm10 6-3 3.5-3-3.5h2v-4h2v4z" />
  </Svg>
);
export default SvgSwapLine;
