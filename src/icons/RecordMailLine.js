import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRecordMailLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M14.257 15a5.5 5.5 0 114.243 2h-13a5.5 5.5 0 114.243-2h4.514zM5.5 15a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm13 0a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" />
    </Svg>
  );
}

export default SvgRecordMailLine;
