import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCornerLeftDownLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M10 5h9v2h-7v10.172l3.95-3.95 1.414 1.414L11 21l-6.364-6.364 1.414-1.414 3.95 3.95V5z" />
    </Svg>
  );
}

export default SvgCornerLeftDownLine;
