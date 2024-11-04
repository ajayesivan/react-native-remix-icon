import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCollapseDiagonalLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M15 4h-2v7h7V9h-3.586l4.293-4.293-1.414-1.414L15 7.586V4zM4 15h3.586l-4.293 4.293 1.414 1.414L9 16.414V20h2v-7H4v2z" />
    </Svg>
  );
}

export default SvgCollapseDiagonalLine;
