import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgKeyboardFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M3 17h18v2H3zm0-6h3v3H3zm5 0h3v3H8zM3 5h3v3H3zm10 0h3v3h-3zm5 0h3v3h-3zm-5 6h3v3h-3zm5 0h3v3h-3zM8 5h3v3H8z" />
  </Svg>
);
export default SvgKeyboardFill;
