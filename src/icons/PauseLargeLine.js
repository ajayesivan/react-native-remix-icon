import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPauseLargeLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M6 3h2v18H6V3zm10 0h2v18h-2V3z" />
    </Svg>
  );
}

export default SvgPauseLargeLine;
