import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCellphoneLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M7 2h11a1 1 0 011 1v18a1 1 0 01-1 1H6a1 1 0 01-1-1V0h2v2zm0 7h10V4H7v5zm0 2v9h10v-9H7z" />
    </Svg>
  );
}

export default SvgCellphoneLine;
