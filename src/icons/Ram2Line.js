import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgRam2Line = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M2 5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1v2a1 1 0 0 0 1 1h7.414l1-1h1.172l1 1H21a1 1 0 0 0 1-1v-2a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm18 11v1h-5.586l-1-1zm-9.414 0-1 1H4v-1zM3 14V7h18v7zm2-5h2v3H5zm6 0H9v3h2zm2 0h2v3h-2zm6 0h-2v3h2z" />
  </Svg>
);
export default SvgRam2Line;
