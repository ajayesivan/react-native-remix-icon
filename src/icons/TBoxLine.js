import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgTBoxLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M5 5v14h14V5zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m9 7v7h-2v-7H7V8h10v2z" />
  </Svg>
);
export default SvgTBoxLine;
