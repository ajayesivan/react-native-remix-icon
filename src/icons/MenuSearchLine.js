import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMenuSearchLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M15.5 5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7M10 8.5a5.5 5.5 0 1 1 10.032 3.117l2.675 2.676-1.414 1.414-2.675-2.675A5.5 5.5 0 0 1 10 8.5M3 4h5v2H3zm0 7h5v2H3zm18 7v2H3v-2z" />
  </Svg>
);
export default SvgMenuSearchLine;
