import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCornerUpLeftLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M19 10v9h-2v-7H6.828l3.95 3.95-1.414 1.414L3 11l6.364-6.364 1.414 1.414L6.828 10H19z" />
    </Svg>
  );
}

export default SvgCornerUpLeftLine;
