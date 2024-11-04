import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgListRadio = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M8.5 7a2 2 0 1 0-4 0 2 2 0 0 0 4 0m2 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0M21 4h-8v2h8zm0 7h-8v2h8zm0 7h-8v2h8zM6.5 19a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8m0-13a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
  </Svg>
);
export default SvgListRadio;
