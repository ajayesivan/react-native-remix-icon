import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFolderLockFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12.414 5H21a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h7.414l2 2zM15 13v-1a3 3 0 10-6 0v1H8v4h8v-4h-1zm-2 0h-2v-1a1 1 0 112 0v1z" />
    </Svg>
  );
}

export default SvgFolderLockFill;
