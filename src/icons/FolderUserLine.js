import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFolderUserLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12.414 5H21a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h7.414l2 2zM4 5v14h16V7h-8.414l-2-2H4zm4 13a4 4 0 018 0H8zm4-5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
    </Svg>
  );
}

export default SvgFolderUserLine;
