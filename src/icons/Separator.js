import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSeparator = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M2 11h2v2H2zm4 0h12v2H6zm14 0h2v2h-2z" />
  </Svg>
);
export default SvgSeparator;
