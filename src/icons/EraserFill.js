import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgEraserFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M14 18.997h7v2h-9l-3.998.002-6.487-6.488a1 1 0 010-1.414L12.12 2.491a1 1 0 011.414 0l7.779 7.778a1 1 0 010 1.414L14 18.997zm1.657-4.486l3.535-3.535-6.364-6.364-3.535 3.535 6.364 6.364z" />
    </Svg>
  );
}

export default SvgEraserFill;
