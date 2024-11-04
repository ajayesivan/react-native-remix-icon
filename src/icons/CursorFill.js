import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCursorFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M13.91 12.36 17 20.854l-2.818 1.026-3.092-8.494-4.172 3.156 1.49-14.909 10.726 10.463z" />
  </Svg>
);
export default SvgCursorFill;
