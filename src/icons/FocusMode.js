import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFocusMode(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4 3a1 1 0 00-1 1v4h2V5h3V3H4zm16 0h-4v2h3v3h2V4a1 1 0 00-1-1zM5 16v3h3v2H4a1 1 0 01-1-1v-4h2zm14 0v3h-3v2h4a1 1 0 001-1v-4h-2zm-9-7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1v-4a1 1 0 00-1-1h-4z" />
    </Svg>
  );
}

export default SvgFocusMode;
