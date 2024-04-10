import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSafeFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M18.005 20h-12v2h-2v-2h-1a1 1 0 01-1-1V4a1 1 0 011-1h18a1 1 0 011 1v15a1 1 0 01-1 1h-1v2h-2v-2zm-7-6.126V17h2v-3.126a4.002 4.002 0 00-1-7.874 4 4 0 00-1 7.874zm1-1.874a2 2 0 110-4 2 2 0 010 4z" />
    </Svg>
  );
}

export default SvgSafeFill;
