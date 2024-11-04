import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgDragMoveFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="m12 22-4-4h8zm0-20 4 4H8zm0 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4M2 12l4-4v8zm20 0-4 4V8z" />
  </Svg>
);
export default SvgDragMoveFill;
