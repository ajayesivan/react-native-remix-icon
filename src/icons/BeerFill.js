import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBeerFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M9 3a2 2 0 011.972 2.335l1.973.33a4.011 4.011 0 00-.005-1.361A2 2 0 0115.733 7H5a1 1 0 11.539-1.843 1 1 0 001.513-.614A2.001 2.001 0 019 3zm1.516-1.703A3.998 3.998 0 005.51 3.043 3 3 0 003 8.236V20a2 2 0 002 2h10a2 2 0 002-2h2a2 2 0 002-2v-7a2 2 0 00-2-2h-2v-.354a4 4 0 00-4.896-6.169 4.01 4.01 0 00-1.588-1.18zM17 18v-7h2v7h-2zM7 11h2v7H7v-7zm4 0h2v7h-2v-7z" />
    </Svg>
  );
}

export default SvgBeerFill;
