import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMoonFoggyLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M16 20.334v-2.199a7.523 7.523 0 003.623-4.281 9 9 0 01-10.622-8.99A7.518 7.518 0 005.151 10H3.117a9.505 9.505 0 018.538-7.963 7 7 0 0010.316 8.728A9.503 9.503 0 0116 20.335zM7 20h7v2H7v-2zm-3-8h6v2H4v-2zm-2 4h10v2H2v-2z" />
    </Svg>
  );
}

export default SvgMoonFoggyLine;
