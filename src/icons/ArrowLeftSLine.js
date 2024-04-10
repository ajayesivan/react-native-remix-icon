import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowLeftSLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M10.828 12l4.95 4.95-1.414 1.415L8 12l6.364-6.364 1.414 1.414-4.95 4.95z" />
    </Svg>
  );
}

export default SvgArrowLeftSLine;
