import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgTriangularFlagLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M6 5.144V16h12.34zM4 2.932c0-.86 1.015-1.32 1.66-.75l15.99 14.067c.692.61.262 1.751-.66 1.751H6v4H4z" />
  </Svg>
);
export default SvgTriangularFlagLine;
