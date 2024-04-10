import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLinksFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M13.06 8.111l1.415 1.414a7 7 0 010 9.9l-.354.353a7 7 0 11-9.9-9.9l1.415 1.415a5 5 0 107.071 7.071l.354-.354a5 5 0 000-7.07l-1.415-1.415 1.415-1.414zm6.718 6.01l-1.414-1.414a5 5 0 00-7.071-7.07l-.354.353a5 5 0 000 7.07l1.415 1.415-1.415 1.414-1.414-1.414a7 7 0 010-9.9l.354-.353a7 7 0 119.9 9.9z" />
    </Svg>
  );
}

export default SvgLinksFill;
