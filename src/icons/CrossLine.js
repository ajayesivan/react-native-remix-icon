import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCrossLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M9 2h6v5h5v6h-5v9H9v-9H4V7h5V2zm2 2v5H6v2h5v9h2v-9h5V9h-5V4h-2z" />
    </Svg>
  );
}

export default SvgCrossLine;
