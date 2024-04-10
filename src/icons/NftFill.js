import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgNftFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M9 12a2 2 0 100-4 2 2 0 000 4zm3-11l9.5 5.5v11L12 23l-9.5-5.5v-11L12 1zM4.5 7.653v8.694l2.372 1.373 8.073-5.92 4.555 2.734v-6.88L12 3.31 4.5 7.653z" />
    </Svg>
  );
}

export default SvgNftFill;
