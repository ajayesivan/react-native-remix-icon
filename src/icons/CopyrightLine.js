import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCopyrightLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M16.288 9.428A4.999 4.999 0 007 12a4.999 4.999 0 009.288 2.572l-1.715-1.028A3 3 0 1112 9c1.093 0 2.05.584 2.573 1.457l1.715-1.03zM22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10 10-4.48 10-10zM4 12c0-4.42 3.58-8 8-8s8 3.58 8 8-3.58 8-8 8-8-3.58-8-8z" />
    </Svg>
  );
}

export default SvgCopyrightLine;
