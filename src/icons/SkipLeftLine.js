import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSkipLeftLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M13.914 12l4.793-4.793-1.414-1.414L11.086 12l6.207 6.207 1.414-1.414L13.914 12zM7 18V6h2v12H7z" />
    </Svg>
  );
}

export default SvgSkipLeftLine;
