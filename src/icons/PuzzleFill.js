import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPuzzleFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M8 4a3 3 0 115.83 1H18a1 1 0 011 1v4.17a3 3 0 110 5.659V20a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1h4.17C8.06 4.687 8 4.35 8 4z" />
    </Svg>
  );
}

export default SvgPuzzleFill;
