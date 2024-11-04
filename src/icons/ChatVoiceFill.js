import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgChatVoiceFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M4.929 19.071A9.97 9.97 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10H2zM11 6v12h2V6zM7 9v6h2V9zm8 0v6h2V9z" />
  </Svg>
);
export default SvgChatVoiceFill;
