import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgP2PLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M17 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6M7 3a4 4 0 0 0-4 4v2h2V7a2 2 0 0 1 2-2h3V3zm10 18a4 4 0 0 0 4-4v-2h-2v2a2 2 0 0 1-2 2h-3v2zm-9-8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m2 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0m7-2a2 2 0 0 0-2 2h-2a4 4 0 0 1 8 0h-2a2 2 0 0 0-2-2M5 21a2 2 0 1 1 4 0h2a4 4 0 0 0-8 0z" />
  </Svg>
);
export default SvgP2PLine;
