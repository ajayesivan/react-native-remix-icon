import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgAddLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" />
  </Svg>
);
export default SvgAddLine;
