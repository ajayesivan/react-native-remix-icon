import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgFileAddLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M15 4H5v16h14V8h-4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008zM11 11V8h2v3h3v2h-3v3h-2v-3H8v-2z" />
  </Svg>
);
export default SvgFileAddLine;
