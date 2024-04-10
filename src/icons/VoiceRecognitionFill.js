import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgVoiceRecognitionFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20.998 3v18h-18V3h18zm-8 3h-2v12h2V6zm-4 3h-2v6h2V9zm8 0h-2v6h2V9z" />
    </Svg>
  );
}

export default SvgVoiceRecognitionFill;
