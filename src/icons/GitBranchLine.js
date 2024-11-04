import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgGitBranchLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M7.105 15.21A3.001 3.001 0 1 1 5 15.17V8.83a3.001 3.001 0 1 1 2 0V12c.836-.628 1.874-1 3-1h4a3 3 0 0 0 2.895-2.21 3.001 3.001 0 1 1 2.032.064A5 5 0 0 1 14 13h-4a3 3 0 0 0-2.895 2.21M6 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2M6 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m12 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
  </Svg>
);
export default SvgGitBranchLine;
