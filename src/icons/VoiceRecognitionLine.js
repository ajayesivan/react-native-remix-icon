import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgVoiceRecognitionLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M4.998 15v4h4v2h-6v-6zm16 0v6h-6v-2h4v-4zm-8-9v12h-2V6zm-4 3v6h-2V9zm8 0v6h-2V9zm-8-6v2h-4v4h-2V3zm12 0v6h-2V5h-4V3z" />
  </Svg>
);
export default SvgVoiceRecognitionLine;
