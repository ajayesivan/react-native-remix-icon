import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgKeyFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M17 14h-4.341a6 6 0 1 1 0-4H23v4h-2v4h-4zM7 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
  </Svg>
);
export default SvgKeyFill;
