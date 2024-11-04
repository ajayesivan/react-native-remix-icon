import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSlideshowFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M13 21v2h-2v-2H3a1 1 0 0 1-1-1V6h20v14a1 1 0 0 1-1 1zM8 10a3 3 0 1 0 3 3H8zm5 0v2h6v-2zm0 4v2h6v-2zM2 3h20v2H2z" />
  </Svg>
);
export default SvgSlideshowFill;
