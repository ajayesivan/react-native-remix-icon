import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSpace = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M4 9v4h16V9h2v5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9z" />
  </Svg>
);
export default SvgSpace;
