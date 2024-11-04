import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgDrizzleFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M11 18v3H9v-3a8 8 0 1 1 7.458-10.901A5.5 5.5 0 1 1 17.5 18zm2 2h2v3h-2z" />
  </Svg>
);
export default SvgDrizzleFill;
