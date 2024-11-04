import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSuitcaseFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M15 3a1 1 0 0 1 1 1v2h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5V4a1 1 0 0 1 1-1zM8 8H6v11h2zm10 0h-2v11h2zm-4-3h-4v1h4z" />
  </Svg>
);
export default SvgSuitcaseFill;
