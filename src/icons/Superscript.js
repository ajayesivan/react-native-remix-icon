import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSuperscript(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M5.596 5l4.904 5.928L15.404 5H18l-6.202 7.497L18 19.994V20h-2.59l-4.91-5.934L5.59 20H3v-.006l6.202-7.497L3 5h2.596zM21.55 6.58a.8.8 0 10-1.32-.36l-1.155.33A2.001 2.001 0 1123 6c0 .573-.24 1.09-.627 1.454L20.744 9H23v1h-4V9l2.55-2.42z" />
    </Svg>
  );
}

export default SvgSuperscript;
