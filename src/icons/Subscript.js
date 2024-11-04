import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSubscript(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M5.596 4L10.5 9.928 15.404 4H18l-6.202 7.497L18 18.994V19h-2.59l-4.91-5.934L5.59 19H3v-.006l6.202-7.497L3 4h2.596zM21.8 16a.8.8 0 10-1.57.22l-1.154.33A2.001 2.001 0 1123 16c0 .573-.24 1.09-.627 1.454L20.744 19H23v1h-4v-1l2.55-2.42a.798.798 0 00.25-.58z" />
    </Svg>
  );
}

export default SvgSubscript;
