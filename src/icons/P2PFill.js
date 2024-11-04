import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgP2PFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M20 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M7 3a4 4 0 0 0-4 4v2h2V7a2 2 0 0 1 2-2h3V3zm10 18a4 4 0 0 0 4-4v-2h-2v2a2 2 0 0 1-2 2h-3v2zM7 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6m10-7a4 4 0 0 0-4 4h8a4 4 0 0 0-4-4M3 21a4 4 0 0 1 8 0z" />
  </Svg>
);
export default SvgP2PFill;
