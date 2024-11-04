import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFlipHorizontal2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M5 19h14V5H5v14zM3 4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm7 4v3h4V8l4 4-4 4v-3h-4v3l-4-4 4-4z" />
    </Svg>
  );
}

export default SvgFlipHorizontal2Line;
