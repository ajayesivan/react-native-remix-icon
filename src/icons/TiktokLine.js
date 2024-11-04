import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgTiktokLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M11 2v6.414a6.85 6.85 0 1 0 5.6 6.736v-3.736a8.6 8.6 0 0 0 3.4.686h1V6.5h-1c-1.903 0-3.4-1.537-3.4-3.5V2zm2 2h1.688c.394 2.22 2.08 3.996 4.312 4.41v1.618c-1.038-.152-1.975-.542-2.843-1.123L14.6 7.863v7.287a4.85 4.85 0 1 1-4.6-4.844v1.604a3.25 3.25 0 1 0 3 3.24zM8.5 15.15a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0" />
  </Svg>
);
export default SvgTiktokLine;
