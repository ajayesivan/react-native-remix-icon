import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgVoiceRecognitionLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4.998 15v4h4v2h-6v-6h2zm16 0v6h-6v-2h4v-4h2zm-8-9v12h-2V6h2zm-4 3v6h-2V9h2zm8 0v6h-2V9h2zm-8-6v2h-4v4h-2V3h6zm12 0v6h-2V5h-4V3h6z" />
    </Svg>
  );
}

export default SvgVoiceRecognitionLine;
