import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDoorClosedLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M2.998 21v-2h2V4a1 1 0 011-1h12a1 1 0 011 1v15h2v2h-18zm14-16h-10v14h10V5zm-2 6v2h-2v-2h2z" />
    </Svg>
  );
}

export default SvgDoorClosedLine;
