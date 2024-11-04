import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgStoreFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M21 11.646V21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9.354A3.99 3.99 0 0 1 2 9V3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v6c0 1.014-.378 1.94-1 2.646M14 9a1 1 0 1 1 2 0 2 2 0 1 0 4 0V4H4v5a2 2 0 1 0 4 0 1 1 0 0 1 2 0 2 2 0 1 0 4 0" />
  </Svg>
);
export default SvgStoreFill;
