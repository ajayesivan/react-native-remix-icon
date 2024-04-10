import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFlipHorizontalFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M11 2v20h2V2h-2zM7 6v12H4V6h3zM4 4a2 2 0 00-2 2v12a2 2 0 002 2h3a2 2 0 002-2V6a2 2 0 00-2-2H4zm11 2a2 2 0 012-2h3a2 2 0 012 2v12a2 2 0 01-2 2h-3a2 2 0 01-2-2V6z" />
    </Svg>
  );
}

export default SvgFlipHorizontalFill;
