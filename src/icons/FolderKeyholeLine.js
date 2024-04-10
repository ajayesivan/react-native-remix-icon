import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFolderKeyholeLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M10.414 3l2 2H21a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h7.414zm-.828 2H4v14h16V7h-8.414l-2-2zM12 9a2 2 0 011.001 3.732L13 17h-2v-4.268A2 2 0 0112 9z" />
    </Svg>
  );
}

export default SvgFolderKeyholeLine;
