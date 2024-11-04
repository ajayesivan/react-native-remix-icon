import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgChatVoiceLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10H2l2.929-2.929A9.97 9.97 0 0 1 2 12m4.828 8H12a8 8 0 1 0-8-8c0 2.152.851 4.165 2.343 5.657l1.414 1.414zM11 6h2v12h-2zM7 9h2v6H7zm8 0h2v6h-2z" />
  </Svg>
);
export default SvgChatVoiceLine;
