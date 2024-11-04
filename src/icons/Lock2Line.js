import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLock2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M6 8V7a6 6 0 1112 0v1h2a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V9a1 1 0 011-1h2zm13 2H5v10h14V10zm-8 5.732A2 2 0 0112 12a2 2 0 011 3.732V18h-2v-2.268zM8 8h8V7a4 4 0 00-8 0v1z" />
    </Svg>
  );
}

export default SvgLock2Line;
