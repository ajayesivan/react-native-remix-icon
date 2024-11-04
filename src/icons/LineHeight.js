import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgLineHeight = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M11 4h10v2H11zM6 7v4H4V7H1l4-4 4 4zm0 10h3l-4 4-4-4h3v-4h2zm5 1h10v2H11zm-2-7h12v2H9z" />
  </Svg>
);
export default SvgLineHeight;
