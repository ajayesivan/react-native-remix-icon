import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRepeatFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M6 4h15a1 1 0 011 1v7h-2V6H6v3L1 5l5-4v3zm12 16H3a1 1 0 01-1-1v-7h2v6h14v-3l5 4-5 4v-3z" />
    </Svg>
  );
}

export default SvgRepeatFill;
