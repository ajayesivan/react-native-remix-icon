import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgGitBranchFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M7.105 15.21A3.001 3.001 0 115 15.17V8.83a3.001 3.001 0 112 0V12c.836-.628 1.874-1 3-1h4a3.001 3.001 0 002.895-2.21 3.001 3.001 0 112.032.064A5.001 5.001 0 0114 13h-4a3.001 3.001 0 00-2.895 2.21z" />
    </Svg>
  );
}

export default SvgGitBranchFill;
