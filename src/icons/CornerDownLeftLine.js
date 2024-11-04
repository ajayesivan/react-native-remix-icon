import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCornerDownLeftLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M19 14V5h-2v7H6.828l3.95-3.95-1.414-1.414L3 13l6.364 6.364 1.414-1.414L6.828 14H19z" />
    </Svg>
  );
}

export default SvgCornerDownLeftLine;
