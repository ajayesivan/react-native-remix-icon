import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgReceiptFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M9 4L6 2 3 4v15a3 3 0 003 3h14a3 3 0 003-3v-2H7v2a1 1 0 11-2 0v-4h16V4l-3-2-3 2-3-2-3 2z" />
    </Svg>
  );
}

export default SvgReceiptFill;
