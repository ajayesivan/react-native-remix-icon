import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCastLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-6q0-1.021-.153-2H20V5H4v3.153A13 13 0 0 0 2 8V4a1 1 0 0 1 1-1m10 18h-2a9 9 0 0 0-9-9v-2c6.075 0 11 4.925 11 11m-4 0H7a5 5 0 0 0-5-5v-2a7 7 0 0 1 7 7m-4 0H2v-3a3 3 0 0 1 3 3" />
  </Svg>
);
export default SvgCastLine;
