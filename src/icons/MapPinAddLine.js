import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMapPinAddLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 20.9l4.95-4.95a7 7 0 10-9.9 0L12 20.9zm0 2.828l-6.364-6.364a9 9 0 1112.728 0L12 23.728zM11 10V7h2v3h3v2h-3v3h-2v-3H8v-2h3z" />
    </Svg>
  );
}

export default SvgMapPinAddLine;
