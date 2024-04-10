import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgReplyFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M11 20L1 12l10-8v5c5.523 0 10 4.477 10 10 0 .273-.01.543-.032.81A8.999 8.999 0 0013 15h-2v5z" />
    </Svg>
  );
}

export default SvgReplyFill;
