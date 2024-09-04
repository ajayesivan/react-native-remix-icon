import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgWebcamLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M11 21v-1.07A7 7 0 0 1 5 13V8a7 7 0 0 1 14 0v5a7 7 0 0 1-6 6.93V21h4v2H7v-2zm1-18a5 5 0 0 0-5 5v5a5 5 0 0 0 10 0V8a5 5 0 0 0-5-5m0 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 2a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
  </Svg>
);
export default SvgWebcamLine;
