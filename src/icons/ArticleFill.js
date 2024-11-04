import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgArticleFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1M7 6v4h4V6zm0 6v2h10v-2zm0 4v2h10v-2zm6-9v2h4V7z" />
  </Svg>
);
export default SvgArticleFill;
