import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgStairsLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M15 3h6v18H3v-6h4v-4h4V7h4V3zm2 2v4h-4v4H9v4H5v2h14V5h-2z" />
    </Svg>
  );
}

export default SvgStairsLine;
