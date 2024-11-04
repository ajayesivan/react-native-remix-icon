import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgPageSeparator = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M17 21v-4H7v4H5v-5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v5zM7 3v4h10V3h2v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3zM2 9l4 3-4 3zm20 0v6l-4-3z" />
  </Svg>
);
export default SvgPageSeparator;
