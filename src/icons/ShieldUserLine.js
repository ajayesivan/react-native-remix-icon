import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgShieldUserLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M3.783 2.826 12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976M5 4.604v9.185a4 4 0 0 0 1.781 3.328L12 20.597l5.219-3.48A4 4 0 0 0 19 13.79V4.604L12 3.05zM12 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m-4.473 5a4.5 4.5 0 0 1 8.946 0z" />
  </Svg>
);
export default SvgShieldUserLine;
