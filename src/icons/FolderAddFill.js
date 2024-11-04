import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFolderAddFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12.414 5H21a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h7.414l2 2zM11 12H8v2h3v3h2v-3h3v-2h-3V9h-2v3z" />
    </Svg>
  );
}

export default SvgFolderAddFill;
