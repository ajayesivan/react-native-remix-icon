import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMapLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="m2 5 7-3 6 3 6.303-2.701a.5.5 0 0 1 .697.46V19l-7 3-6-3-6.303 2.701a.5.5 0 0 1-.697-.46zm12.935 2.204-6-3L4 6.319v12.648l5.065-2.17 6 3L20 17.68V5.033z" />
  </Svg>
);
export default SvgMapLine;
