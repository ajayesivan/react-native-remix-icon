import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgImageCircleLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M19.576 14.576l-3.87-3.869a1 1 0 00-1.413 0l-7.428 7.428a8 8 0 1112.711-3.558zM8.59 19.24l6.41-6.41 3.639 3.638A7.993 7.993 0 0112 20a7.964 7.964 0 01-3.41-.761zM12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-1-12a2 2 0 11-4 0 2 2 0 014 0z" />
    </Svg>
  );
}

export default SvgImageCircleLine;
