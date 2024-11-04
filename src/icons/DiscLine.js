import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDiscLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M15 4.582V12a3 3 0 11-2-2.83V2.05c5.053.501 9 4.765 9 9.95 0 5.523-4.477 10-10 10S2 17.523 2 12c0-5.185 3.947-9.449 9-9.95v2.012A8.001 8.001 0 0012 20a8 8 0 003-15.418z" />
    </Svg>
  );
}

export default SvgDiscLine;
