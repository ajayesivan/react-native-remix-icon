import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMicrosoftLoopLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 4a8 8 0 110 16H7.69a6.48 6.48 0 001.734-3.5H12A4.5 4.5 0 107.5 12v3.5A4.502 4.502 0 014 19.889V12a8 8 0 018-8zm0 18c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12v10h10zm-2.5-7.5V12a2.5 2.5 0 112.5 2.5H9.5z" />
    </Svg>
  );
}

export default SvgMicrosoftLoopLine;
