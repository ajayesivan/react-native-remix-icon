import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTerminalLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M11 12l-7.071 7.071-1.414-1.414L8.172 12 2.514 6.343 3.929 4.93 10.999 12zm0 7h10v2H11v-2z" />
    </Svg>
  );
}

export default SvgTerminalLine;
