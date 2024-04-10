import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCactusLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M11.998 2a4 4 0 014 4v9h1c.55 0 1-.45 1-1V8a1 1 0 012 0v6c0 1.66-1.34 3-3 3h-1v3h2v2h-12v-2h2v-6h-1a3 3 0 01-3-3V9a1 1 0 112 0v2c0 .55.45 1 1 1h1V6a4 4 0 014-4zm0 2a2 2 0 00-2 2v14h4V6a2 2 0 00-2-2z" />
    </Svg>
  );
}

export default SvgCactusLine;
