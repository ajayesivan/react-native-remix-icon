import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgDragDropFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M14 6h2v2h5a1 1 0 0 1 1 1v7.5L16 13l.036 8.062 2.223-2.15L20.041 22H9a1 1 0 0 1-1-1v-5H6v-2h2V9a1 1 0 0 1 1-1h5zm8 11.338V21a1 1 0 0 1-.048.307l-1.96-3.394zM4 14v2H2v-2zm0-4v2H2v-2zm0-4v2H2V6zm0-4v2H2V2zm4 0v2H6V2zm4 0v2h-2V2zm4 0v2h-2V2z" />
  </Svg>
);
export default SvgDragDropFill;
