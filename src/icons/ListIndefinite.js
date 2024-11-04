import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgListIndefinite(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M13 4h8v2h-8V4zm0 7h8v2h-8v-2zm0 7h8v2h-8v-2zm-6.5 1a2 2 0 110-4 2 2 0 010 4zm0 2a4 4 0 100-8 4 4 0 000 8zM5 6v3h3V6H5zM3 4h7v7H3V4z" />
    </Svg>
  );
}

export default SvgListIndefinite;
