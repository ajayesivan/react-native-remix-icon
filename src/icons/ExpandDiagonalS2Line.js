import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgExpandDiagonalS2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M7 8.414V12H5V5h7v2H8.414L17 15.586V12h2v7h-7v-2h3.586L7 8.414z" />
    </Svg>
  );
}

export default SvgExpandDiagonalS2Line;
