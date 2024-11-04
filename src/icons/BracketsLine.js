import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgBracketsLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M9 3v2H6v14h3v2H4V3zm6 0h5v18h-5v-2h3V5h-3z" />
  </Svg>
);
export default SvgBracketsLine;
