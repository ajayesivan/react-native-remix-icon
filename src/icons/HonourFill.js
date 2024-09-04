import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgHonourFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M21 4v14.721a.5.5 0 0 1-.298.458L12 23.03 3.298 19.18A.5.5 0 0 1 3 18.722V4H1V2h22v2zM8 12v2h8v-2zm0-4v2h8V8z" />
  </Svg>
);
export default SvgHonourFill;
