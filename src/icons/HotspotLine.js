import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgHotspotLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M11 2v2H7v16h10v-9h2v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm2 5a2 2 0 0 1 2 2h-2zm0-3a5 5 0 0 1 5 5h-2a3 3 0 0 0-3-3zm0-3a8 8 0 0 1 8 8h-2a6 6 0 0 0-6-6z" />
  </Svg>
);
export default SvgHotspotLine;
