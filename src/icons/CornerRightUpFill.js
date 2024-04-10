import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCornerRightUpFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M14 19H5v-2h7V9.414H6.586L13 3l6.414 6.414H14V19z" />
    </Svg>
  );
}

export default SvgCornerRightUpFill;
