import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgLayoutHorizontalFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M4 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm3 6V7h10v2zm0 4v-2h10v2zm10 4H7v-2h10z" />
  </Svg>
);
export default SvgLayoutHorizontalFill;
