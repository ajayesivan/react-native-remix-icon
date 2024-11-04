import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgResetRightLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2v2a8 8 0 11-4.5 1.385V8h2V2h-6v2H6a9.985 9.985 0 00-4 8z" />
    </Svg>
  );
}

export default SvgResetRightLine;
