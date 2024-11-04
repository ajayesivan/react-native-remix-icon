import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMergeCellsHorizontal = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M20 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-9 2H5v5.999h2V9l3 3-3 3v-2H5v6h6v-2h2v2h6v-6h-2v2l-3-3 3-3v1.999h2V5h-6v2h-2zm2 8v2h-2v-2zm0-4v2h-2V9z" />
  </Svg>
);
export default SvgMergeCellsHorizontal;
