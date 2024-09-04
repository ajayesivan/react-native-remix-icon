import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgDoorClosedLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M2.998 21v-2h2V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v15h2v2zm14-16h-10v14h10zm-2 6v2h-2v-2z" />
  </Svg>
);
export default SvgDoorClosedLine;
