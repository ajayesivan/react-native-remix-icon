import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgBeerLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M9 3a2 2 0 0 1 1.972 2.335l1.973.33a4 4 0 0 0-.005-1.361A2 2 0 0 1 15.733 7H5a1 1 0 1 1 .539-1.843 1 1 0 0 0 1.513-.614A2 2 0 0 1 9 3m1.516-1.703A3.998 3.998 0 0 0 5.51 3.043 3 3 0 0 0 3 8.236V20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2h2a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-2v-.354a4 4 0 0 0-4.896-6.169 4 4 0 0 0-1.588-1.18M17 11h2v7h-2zm-2-2v11H5V9zm-8 2v7h2v-7zm6 0v7h-2v-7z" />
  </Svg>
);
export default SvgBeerLine;
