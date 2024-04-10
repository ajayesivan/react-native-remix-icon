import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgWebcamFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M11 21v-1.07A7.001 7.001 0 015 13V8a7 7 0 0114 0v5a7.001 7.001 0 01-6 6.93V21h4v2H7v-2h4zm1-12a1 1 0 110-2 1 1 0 010 2zm0 2a3 3 0 100-6 3 3 0 000 6z" />
    </Svg>
  );
}

export default SvgWebcamFill;
