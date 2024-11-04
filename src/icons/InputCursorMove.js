import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgInputCursorMove = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M8 21v-2h3V5H8V3h8v2h-3v14h3v2zM18.05 7.05 23 12l-4.95 4.95-1.414-1.414L20.172 12l-3.536-3.536zm-12.1 0 1.414 1.414L3.828 12l3.536 3.536L5.95 16.95 1 12z" />
  </Svg>
);
export default SvgInputCursorMove;
