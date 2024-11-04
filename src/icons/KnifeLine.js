import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgKnifeLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M4.343 1.408 22.374 19.44a1.5 1.5 0 1 1-2.121 2.122l-4.596-4.596L12.12 20.5l-7.778-7.778A8 8 0 0 1 4.17 1.587zm.241 3.07-.051.11a6 6 0 0 0 1.048 6.535l.176.185 6.364 6.364 2.828-2.829z" />
  </Svg>
);
export default SvgKnifeLine;
