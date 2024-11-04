import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgFoggyFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M1.584 13.007a8 8 0 1 1 14.873-5.908 5.5 5.5 0 0 1 6.52 5.908zM4 19h17v2H4zm-2-4h21v2H2z" />
  </Svg>
);
export default SvgFoggyFill;
