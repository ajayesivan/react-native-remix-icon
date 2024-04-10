import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSidebarFoldFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M13 3H4a1 1 0 00-1 1v16a1 1 0 001 1h9V3zm2 18V3h5a1 1 0 011 1v16a1 1 0 01-1 1h-5zM11 8.5v7L7 12l4-3.5z" />
    </Svg>
  );
}

export default SvgSidebarFoldFill;
