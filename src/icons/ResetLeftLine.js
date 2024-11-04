import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgResetLeftLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2v2a8 8 0 104.5 1.385V8h-2V2h6v2H18a9.985 9.985 0 014 8z" />
    </Svg>
  );
}

export default SvgResetLeftLine;
