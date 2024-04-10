import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFolderLockLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12.414 5H21a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h7.414l2 2zM4 5v14h16V7h-8.414l-2-2H4zm11 8h1v4H8v-4h1v-1a3 3 0 116 0v1zm-2 0v-1a1 1 0 10-2 0v1h2z" />
    </Svg>
  );
}

export default SvgFolderLockLine;
