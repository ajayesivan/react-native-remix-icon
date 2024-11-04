import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgRainyLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M16 18v-2h1a4 4 0 1 0-2.157-7.37A6 6 0 1 0 8 15.917v2.022A8.001 8.001 0 0 1 9 2a8 8 0 0 1 6.98 4.087A6 6 0 1 1 17 18zm-5.768.732L12 16.965l1.768 1.767a2.5 2.5 0 1 1-3.536 0" />
  </Svg>
);
export default SvgRainyLine;
