import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCelsiusLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4.5 10a3.5 3.5 0 110-7 3.5 3.5 0 010 7zm0-2a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM22 10h-2a4 4 0 00-8 0v5a4 4 0 008 0h2a6 6 0 01-12 0v-5a6 6 0 0112 0z" />
    </Svg>
  );
}

export default SvgCelsiusLine;
