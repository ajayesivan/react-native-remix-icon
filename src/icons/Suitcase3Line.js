import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSuitcase3Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M15 1a1 1 0 011 1v5h1V6h2v1h1a1 1 0 011 1v12a1 1 0 01-1 1h-1v1h-2v-1H7v1H5v-1H4a1 1 0 01-1-1V8a1 1 0 011-1h1V6h2v1h1V2a1 1 0 011-1h6zm4 8H5v10h14V9zM9 10v8H7v-8h2zm4 0v8h-2v-8h2zm4 0v8h-2v-8h2zm-3-7h-4v4h4V3z" />
    </Svg>
  );
}

export default SvgSuitcase3Line;
