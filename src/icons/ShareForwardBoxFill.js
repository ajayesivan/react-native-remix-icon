import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgShareForwardBoxFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M9 3v2H4v14h16v-9h2v10a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h6zm7 2V1l7 6h-9a2 2 0 00-2 2v6h-2V9a4 4 0 014-4h2z" />
    </Svg>
  );
}

export default SvgShareForwardBoxFill;
