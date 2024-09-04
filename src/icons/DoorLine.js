import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgDoorLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M17.998 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-1 2h-10v14h10zm-2 6v2h-2v-2z" />
  </Svg>
);
export default SvgDoorLine;
