import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCornerRightDownFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M14 5H5v2h7v7.586H6.586L13 21l6.414-6.414H14V5z" />
    </Svg>
  );
}

export default SvgCornerRightDownFill;
