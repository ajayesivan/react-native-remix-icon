import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgTestTubeLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M17 2v2h-1v14a4 4 0 0 1-8 0V4H7V2zm-3 8h-4v8a2 2 0 1 0 4 0zm-1 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2m-2-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2m3-8h-4v4h4z" />
  </Svg>
);
export default SvgTestTubeLine;
