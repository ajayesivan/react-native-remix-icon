import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAlignItemLeftFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3 21V3h2v18H3zm4-7a1 1 0 011-1h8a1 1 0 011 1v5a1 1 0 01-1 1H8a1 1 0 01-1-1v-5zM8 4a1 1 0 00-1 1v5a1 1 0 001 1h12a1 1 0 001-1V5a1 1 0 00-1-1H8z" />
    </Svg>
  );
}

export default SvgAlignItemLeftFill;
