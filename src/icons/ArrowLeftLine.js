import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowLeftLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414L7.828 11z" />
    </Svg>
  );
}

export default SvgArrowLeftLine;
