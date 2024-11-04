import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFolderOpenFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3 21a1 1 0 01-1-1V4a1 1 0 011-1h7.414l2 2H20a1 1 0 011 1v3H4v9.996L6 11h16.5l-2.31 9.242a1 1 0 01-.97.758H3z" />
    </Svg>
  );
}

export default SvgFolderOpenFill;
