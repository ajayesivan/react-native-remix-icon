import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgGitBranchLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M7.105 15.21A3.001 3.001 0 115 15.17V8.83a3.001 3.001 0 112 0V12c.836-.628 1.874-1 3-1h4a3.001 3.001 0 002.895-2.21 3.001 3.001 0 112.032.064A5.002 5.002 0 0114 13h-4a3.001 3.001 0 00-2.895 2.21zM6 17a1 1 0 100 2 1 1 0 000-2zM6 5a1 1 0 100 2 1 1 0 000-2zm12 0a1 1 0 100 2 1 1 0 000-2z" />
    </Svg>
  );
}

export default SvgGitBranchLine;
