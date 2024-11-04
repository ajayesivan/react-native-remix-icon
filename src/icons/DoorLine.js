import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDoorLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M17.998 3a1 1 0 011 1v16a1 1 0 01-1 1h-12a1 1 0 01-1-1V4a1 1 0 011-1h12zm-1 2h-10v14h10V5zm-2 6v2h-2v-2h2z" />
    </Svg>
  );
}

export default SvgDoorLine;
