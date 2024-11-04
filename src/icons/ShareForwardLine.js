import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgShareForwardLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M13 14h-2a9 9 0 0 0-7.968 4.81A10 10 0 0 1 3 18C3 12.477 7.477 8 13 8V2.5L23.5 11 13 19.5zm-2-2h4v3.308L20.321 11 15 6.692V10h-2a7.98 7.98 0 0 0-6.057 2.774A11 11 0 0 1 11 12" />
  </Svg>
);
export default SvgShareForwardLine;
