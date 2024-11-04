import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgFridgeFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M19.998 12v10a1 1 0 0 1-1 1h-14a1 1 0 0 1-1-1V12zm-11 2h-2v5h2zm10-13a1 1 0 0 1 1 1v8h-16V2a1 1 0 0 1 1-1zm-10 3h-2v4h2z" />
  </Svg>
);
export default SvgFridgeFill;
