import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgUploadLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3 19h18v2H3v-2zM13 5.828V17h-2V5.828L4.929 11.9l-1.414-1.414L12 2l8.485 8.485-1.414 1.415L13 5.827z" />
    </Svg>
  );
}

export default SvgUploadLine;
