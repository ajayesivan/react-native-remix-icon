import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMicrosoftFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M11.501 3v8.5h-8.5V3h8.5zm0 18h-8.5v-8.5h8.5V21zm1-18h8.5v8.5h-8.5V3zm8.5 9.5V21h-8.5v-8.5h8.5z" />
    </Svg>
  );
}

export default SvgMicrosoftFill;
