import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRobot3Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M11 1v1H7a3 3 0 00-3 3v3a5 5 0 005 5h6a5 5 0 005-5V5a3 3 0 00-3-3h-4V1h-2zM6 5a1 1 0 011-1h10a1 1 0 011 1v3a3 3 0 01-3 3H9a3 3 0 01-3-3V5zm3.5 4a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm5 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM6 22a6 6 0 0112 0h2a8 8 0 10-16 0h2z" />
    </Svg>
  );
}

export default SvgRobot3Line;
