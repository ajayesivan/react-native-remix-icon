import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgExpandDiagonalLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M17.586 5H14V3h7v7h-2V6.414l-4.293 4.293-1.414-1.414L17.586 5zM3 14h2v3.586l4.293-4.293 1.414 1.414L6.414 19H10v2H3v-7z" />
    </Svg>
  );
}

export default SvgExpandDiagonalLine;
