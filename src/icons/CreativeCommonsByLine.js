import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCreativeCommonsByLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M14 7a2 2 0 11-4 0 2 2 0 014 0zm1 4a1 1 0 00-1-1h-4a1 1 0 00-1 1v4h1.5v4h3v-4H15v-4zm-3-9C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM4 12a8 8 0 1116 0 8 8 0 01-16 0z" />
    </Svg>
  );
}

export default SvgCreativeCommonsByLine;
