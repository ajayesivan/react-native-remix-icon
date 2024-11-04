import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgArchiveStackLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M4 5h16V3H4zm16 4H4V7h16zM3 11h7v2h4v-2h7v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm13 2v2H8v-2H5v6h14v-6z" />
  </Svg>
);
export default SvgArchiveStackLine;
