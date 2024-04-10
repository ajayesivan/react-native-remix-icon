import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgExpandDiagonalFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M21 3h-7.5l3.043 3.043-3.25 3.25 1.414 1.414 3.25-3.25L21 10.5V3zM3 21h7.5l-3.043-3.043 3.25-3.25-1.414-1.414-3.25 3.25L3 13.5V21z" />
    </Svg>
  );
}

export default SvgExpandDiagonalFill;
