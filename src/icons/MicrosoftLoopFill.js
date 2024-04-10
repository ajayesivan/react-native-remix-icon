import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMicrosoftLoopFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M22 12c0 5.523-4.477 10-10 10H6.665A7.99 7.99 0 0010 15.5h2A3.5 3.5 0 108.5 12v3.5A6.5 6.5 0 012 22V12C2 6.477 6.477 2 12 2s10 4.477 10 10z" />
    </Svg>
  );
}

export default SvgMicrosoftLoopFill;
