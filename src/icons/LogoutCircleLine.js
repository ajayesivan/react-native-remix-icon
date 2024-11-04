import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgLogoutCircleLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M5 11h8v2H5v3l-5-4 5-4zm-1 7h2.708a8 8 0 1 0 0-12H4A9.99 9.99 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.99 9.99 0 0 1-8-4" />
  </Svg>
);
export default SvgLogoutCircleLine;
