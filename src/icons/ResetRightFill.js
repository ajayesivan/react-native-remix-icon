import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgResetRightFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2v2a8 8 0 11-5.135 1.865L9 8V2H3l2.446 2.447A9.977 9.977 0 002 12z" />
    </Svg>
  );
}

export default SvgResetRightFill;
