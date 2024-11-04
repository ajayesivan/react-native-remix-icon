import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgInkBottleLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M16 8.997l4.371 1.748a1 1 0 01.629.929v9.323a1 1 0 01-1 1H4a1 1 0 01-1-1v-9.323a1 1 0 01.629-.929L8 8.997h8zm-.385 2h-7.23L5 12.35v7.646h14v-1H8v-5h11V12.35l-3.385-1.354zm.385-8a1 1 0 011 1v4H7v-4a1 1 0 011-1h8zm-1 2H9v1h6v-1z" />
    </Svg>
  );
}

export default SvgInkBottleLine;
