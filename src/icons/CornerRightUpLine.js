import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCornerRightUpLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M14 19H5v-2h7V6.828l-3.95 3.95-1.414-1.414L13 3l6.364 6.364-1.414 1.414L14 6.828V19z" />
    </Svg>
  );
}

export default SvgCornerRightUpLine;
