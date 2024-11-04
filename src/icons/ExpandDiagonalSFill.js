import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgExpandDiagonalSFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M19 5h-7.5l3.043 3.043-6.5 6.5L5 11.5V19h7.5l-3.043-3.043 6.5-6.5L19 12.5V5z" />
    </Svg>
  );
}

export default SvgExpandDiagonalSFill;
