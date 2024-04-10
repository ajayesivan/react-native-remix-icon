import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPencilRulerFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M5 18v2h4v-2H5zM3 7l4-5 4 5v15H3V7zm18 1h-2v2h2v2h-3v2h3v2h-2v2h2v3a1 1 0 01-1 1h-6a1 1 0 01-1-1V5a1 1 0 011-1h6a1 1 0 011 1v3z" />
    </Svg>
  );
}

export default SvgPencilRulerFill;
