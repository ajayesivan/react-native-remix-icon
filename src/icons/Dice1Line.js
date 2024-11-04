import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgDice1Line = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M5 5v14h14V5zM3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm9 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
  </Svg>
);
export default SvgDice1Line;
