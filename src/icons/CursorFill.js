import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCursorFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M13.91 12.36L17 20.854l-2.818 1.026-3.092-8.494-4.172 3.156 1.49-14.909 10.726 10.463-5.225.264z" />
    </Svg>
  );
}

export default SvgCursorFill;
