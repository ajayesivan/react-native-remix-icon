import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgIndentDecrease = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M3 4h18v2H3zm0 15h18v2H3zm8-5h10v2H11zm0-5h10v2H11zm-8 3.5L7 9v7z" />
  </Svg>
);
export default SvgIndentDecrease;
