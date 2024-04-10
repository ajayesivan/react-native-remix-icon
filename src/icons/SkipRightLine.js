import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSkipRightLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M10.086 12l-4.793 4.793 1.414 1.414L12.914 12 6.707 5.793 5.293 7.207 10.086 12zM17 6v12h-2V6h2z" />
    </Svg>
  );
}

export default SvgSkipRightLine;
