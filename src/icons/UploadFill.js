import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgUploadFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3 19h18v2H3v-2zm10-9v8h-2v-8H4l8-8 8 8h-7z" />
    </Svg>
  );
}

export default SvgUploadFill;
