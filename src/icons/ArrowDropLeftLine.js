import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowDropLeftLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M11.828 12l2.829 2.829-1.414 1.414L9 12.001l4.243-4.243 1.414 1.414-2.829 2.829z" />
    </Svg>
  );
}

export default SvgArrowDropLeftLine;
