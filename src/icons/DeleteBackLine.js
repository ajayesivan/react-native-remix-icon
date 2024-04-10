import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDeleteBackLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M6.535 3h14.464a1 1 0 011 1v16a1 1 0 01-1 1H6.535a1 1 0 01-.833-.445l-5.333-8a1 1 0 010-1.11l5.333-8A1 1 0 016.535 3zm.535 2l-4.667 7 4.667 7H20V5H7.07zM16 11v2H9v-2h7z" />
    </Svg>
  );
}

export default SvgDeleteBackLine;
