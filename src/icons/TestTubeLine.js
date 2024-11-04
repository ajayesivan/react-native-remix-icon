import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTestTubeLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M17 2v2h-1v14a4 4 0 01-8 0V4H7V2h10zm-3 8h-4v8a2 2 0 104 0v-8zm-1 5a1 1 0 110 2 1 1 0 010-2zm-2-3a1 1 0 110 2 1 1 0 010-2zm3-8h-4v4h4V4z" />
    </Svg>
  );
}

export default SvgTestTubeLine;
