import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgGitForkLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M6 5a1 1 0 100 2 1 1 0 000-2zM3 6a3 3 0 114 2.83V9a2 2 0 002 2h6a2 2 0 002-2v-.17a3.001 3.001 0 112 0V9a4 4 0 01-4 4h-2v2.17a3.001 3.001 0 11-2 0V13H9a4 4 0 01-4-4v-.17A3.001 3.001 0 013 6zm15-1a1 1 0 100 2 1 1 0 000-2zm-6 12a1 1 0 100 2 1 1 0 000-2z" />
    </Svg>
  );
}

export default SvgGitForkLine;
