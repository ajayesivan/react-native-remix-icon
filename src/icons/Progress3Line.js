import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgProgress3Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12zm18 0a8 8 0 11-16 0 8 8 0 0116 0zm-2 0a5.98 5.98 0 01-1.757 4.243L12 12V6a6 6 0 016 6z" />
    </Svg>
  );
}

export default SvgProgress3Line;
