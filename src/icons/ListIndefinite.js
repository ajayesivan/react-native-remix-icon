import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgListIndefinite = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M13 4h8v2h-8zm0 7h8v2h-8zm0 7h8v2h-8zm-6.5 1a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8M5 6v3h3V6zM3 4h7v7H3z" />
  </Svg>
);
export default SvgListIndefinite;
