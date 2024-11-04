import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgShapeLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M7.83 20A3.001 3.001 0 1 1 4 16.17V7.83A3.001 3.001 0 1 1 7.83 4h8.34A3.001 3.001 0 1 1 20 7.83v8.34A3.001 3.001 0 1 1 16.17 20zm0-2h8.34A3 3 0 0 1 18 16.17V7.83A3 3 0 0 1 16.17 6H7.83A3 3 0 0 1 6 7.83v8.34A3 3 0 0 1 7.83 18M5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2m14 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2M5 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
  </Svg>
);
export default SvgShapeLine;
