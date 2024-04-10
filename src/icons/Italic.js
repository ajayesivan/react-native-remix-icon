import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgItalic(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M15 20H7v-2h2.927l2.116-12H9V4h8v2h-2.927l-2.116 12H15v2z" />
    </Svg>
  );
}

export default SvgItalic;
