import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgExpandDiagonalS2Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M5 5v7.5l3.043-3.043 6.5 6.5L11.5 19H19v-7.5l-3.043 3.043-6.5-6.5L12.5 5H5z" />
    </Svg>
  );
}

export default SvgExpandDiagonalS2Fill;
