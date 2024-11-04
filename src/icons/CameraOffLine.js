import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCameraOffLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M19.586 21H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h.586L1.394 2.808l1.414-1.415 19.799 19.8-1.415 1.414zm-14-14H4v12h13.586l-2.18-2.18A5.5 5.5 0 0 1 7.68 9.094zm3.525 3.525a3.5 3.5 0 0 0 4.865 4.865zM22 17.785l-2-2V7h-3.83l-2-2H9.83l-.308.307-1.414-1.414L9 3h6l2 2h4a1 1 0 0 1 1 1zM11.262 7.05a5.5 5.5 0 0 1 6.188 6.188l-2.338-2.338a3.5 3.5 0 0 0-1.512-1.512z" />
  </Svg>
);
export default SvgCameraOffLine;
