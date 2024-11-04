import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgDvdFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M13 11V6l-5 7h3v5l5-7zm-1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10" />
  </Svg>
);
export default SvgDvdFill;
