import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMailCheckLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M22 14h-2V7.238l-7.928 7.1L4 7.216V19h10v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1zM4.511 5l7.55 6.662L19.502 5zM19 22l-3.536-3.535 1.415-1.415L19 19.172l3.535-3.536 1.415 1.414z" />
  </Svg>
);
export default SvgMailCheckLine;
