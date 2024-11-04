import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgTapeLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M10.83 13h2.34A3 3 0 1 1 16 15H8a3 3 0 1 1 2.83-2M4 5v14h16V5zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m5 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2m8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
  </Svg>
);
export default SvgTapeLine;
