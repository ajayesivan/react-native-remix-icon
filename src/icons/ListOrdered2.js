import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgListOrdered2(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M5.75 3.5H4.717l-1.467.393v1.553l1-.268V8.5H3V10h4V8.5H5.75v-5zM10 4h11v2H10V4zm0 7h11v2H10v-2zm0 7h11v2H10v-2zm-7.125-2.375a2.125 2.125 0 113.812 1.292l-.004.006L5.316 18.5H7V20H3v-1.121l2.472-2.844a.625.625 0 10-1.094-.466l-.013.306h-1.49v-.25z" />
    </Svg>
  );
}

export default SvgListOrdered2;
