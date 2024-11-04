import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCameraLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="m9.828 5-2 2H4v12h16V7h-3.828l-2-2zM9 3h6l2 2h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4zm3 15a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0-2a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
  </Svg>
);
export default SvgCameraLine;
