import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFolderForbidLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M22 11.255a6.972 6.972 0 00-2-.965V7h-8.414l-2-2H4v14h7.29c.215.722.543 1.396.965 2H3a1 1 0 01-1-1V4a1 1 0 011-1h7.414l2 2H21a1 1 0 011 1v5.255zM18 22a5 5 0 110-10 5 5 0 010 10zm-1.293-2.292a3 3 0 004.001-4.001l-4.001 4zm-1.415-1.415l4.001-4a3 3 0 00-4.001 4.001z" />
    </Svg>
  );
}

export default SvgFolderForbidLine;
