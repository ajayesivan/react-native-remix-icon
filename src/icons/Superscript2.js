import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSuperscript2(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M11 7v13H9V7H3V5h12v2h-4zm8.55-.42a.8.8 0 10-1.32-.36l-1.154.33A2.001 2.001 0 1121 6c0 .573-.24 1.09-.627 1.454L18.744 9H21v1h-4V9l2.55-2.42z" />
    </Svg>
  );
}

export default SvgSuperscript2;
