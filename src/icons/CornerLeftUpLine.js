import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCornerLeftUpLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M10 19h9v-2h-7V6.828l3.95 3.95 1.414-1.414L11 3 4.636 9.364l1.414 1.414L10 6.828V19z" />
    </Svg>
  );
}

export default SvgCornerLeftUpLine;
