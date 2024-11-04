import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgInboxLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M21 3a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h18zM7.416 14H4v5h16v-5h-3.416a5.001 5.001 0 01-9.168 0zM20 5H4v7h5a3 3 0 106 0h5V5z" />
    </Svg>
  );
}

export default SvgInboxLine;
