import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgExpandDiagonalSLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M15.586 7H12V5h7v7h-2V8.414L8.414 17H12v2H5v-7h2v3.586L15.586 7z" />
    </Svg>
  );
}

export default SvgExpandDiagonalSLine;
