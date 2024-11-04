import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFlipHorizontal2Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4 3a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H4zm6 5v3h4V8l4 4-4 4v-3h-4v3l-4-4 4-4z" />
    </Svg>
  );
}

export default SvgFlipHorizontal2Fill;
