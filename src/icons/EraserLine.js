import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgEraserLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M8.586 8.854l-4.95 4.95 5.194 5.194H10v-.001h1.171l3.779-3.779-6.364-6.364zM10 7.44l6.364 6.364 2.828-2.828-6.364-6.364L10 7.44zm4 11.557h7v2h-9l-3.998.002-6.487-6.488a1 1 0 010-1.414L12.12 2.491a1 1 0 011.414 0l7.779 7.778a1 1 0 010 1.414L14 18.997z" />
    </Svg>
  );
}

export default SvgEraserLine;
