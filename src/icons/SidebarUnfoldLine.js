import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSidebarUnfoldLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M5 5h8v14H5V5zm14 14h-4V5h4v14zM4 3a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H4zm7 9L7 8.5v7l4-3.5z" />
    </Svg>
  );
}

export default SvgSidebarUnfoldLine;
