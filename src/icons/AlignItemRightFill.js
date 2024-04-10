import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAlignItemRightFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M19 21V3h2v18h-2zM7 14a1 1 0 011-1h8a1 1 0 011 1v5a1 1 0 01-1 1H8a1 1 0 01-1-1v-5zM4 4a1 1 0 00-1 1v5a1 1 0 001 1h12a1 1 0 001-1V5a1 1 0 00-1-1H4z" />
    </Svg>
  );
}

export default SvgAlignItemRightFill;
