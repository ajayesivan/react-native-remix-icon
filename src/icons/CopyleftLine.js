import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCopyleftLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm0-2c4.42 0 8-3.58 8-8s-3.58-8-8-8-8 3.58-8 8 3.58 8 8 8zm0-3a4.999 4.999 0 01-4.288-2.428l1.714-1.029A3 3 0 1012 9a2.998 2.998 0 00-2.573 1.456L7.712 9.428A4.999 4.999 0 0117 12c0 2.76-2.24 5-5 5z" />
    </Svg>
  );
}

export default SvgCopyleftLine;
