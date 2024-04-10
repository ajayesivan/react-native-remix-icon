import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMoonLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M10 7a7 7 0 0012 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2h.1A6.98 6.98 0 0010 7zm-6 5a8 8 0 0015.062 3.762A9 9 0 018.238 4.938 7.999 7.999 0 004 12z" />
    </Svg>
  );
}

export default SvgMoonLine;
