import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgHailLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M6 17.419A8.003 8.003 0 019 2a8.003 8.003 0 017.458 5.099A5.5 5.5 0 0119 17.793v-2.13a3.5 3.5 0 10-4-5.612V10a6 6 0 10-9 5.197v2.222zM10 17a2 2 0 110-4 2 2 0 010 4zm5 3a2 2 0 110-4 2 2 0 010 4zm-5 3a2 2 0 110-4 2 2 0 010 4z" />
    </Svg>
  );
}

export default SvgHailLine;
