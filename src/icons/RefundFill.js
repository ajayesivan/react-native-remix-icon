import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRefundFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M22.005 7h-20V4a1 1 0 011-1h18a1 1 0 011 1v3zm0 2v11a1 1 0 01-1 1h-18a1 1 0 01-1-1V9h20zm-11 5v-2.5l-4.5 4.5h10.5v-2h-6z" />
    </Svg>
  );
}

export default SvgRefundFill;
