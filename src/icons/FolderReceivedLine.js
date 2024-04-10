import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFolderReceivedLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M22 13h-2V7h-8.414l-2-2H4v14h9v2H3a1 1 0 01-1-1V4a1 1 0 011-1h7.414l2 2H21a1 1 0 011 1v7zm-2 4h3v2h-3v3.5L15 18l5-4.5V17z" />
    </Svg>
  );
}

export default SvgFolderReceivedLine;
