import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSlackLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M14.501 3a1.5 1.5 0 011.5 1.5v5a1.5 1.5 0 01-3 0v-5a1.5 1.5 0 011.5-1.5zm-10 10h1.5v1.5a1.5 1.5 0 11-1.5-1.5zm8.5 5h1.5a1.5 1.5 0 11-1.5 1.5V18zm1.5-5h5a1.5 1.5 0 010 3h-5a1.5 1.5 0 110-3zm5-5a1.5 1.5 0 010 3h-1.5V9.5a1.5 1.5 0 011.5-1.5zm-15 0h5a1.5 1.5 0 110 3h-5a1.5 1.5 0 010-3zm5-5a1.5 1.5 0 011.5 1.5V6h-1.5a1.5 1.5 0 110-3zm0 10a1.5 1.5 0 011.5 1.5v5a1.5 1.5 0 01-3 0v-5a1.5 1.5 0 011.5-1.5z" />
    </Svg>
  );
}

export default SvgSlackLine;
