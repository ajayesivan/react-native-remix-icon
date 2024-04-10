import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRemixiconFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M16.53 17.53L20.001 21h-17V4h10.667v.008A7.118 7.118 0 0114.137 4c-.089.37-.136.76-.136 1.166 0 2.318 2.015 4.333 4.667 4.333.724 0 1.419-.197 2.032-.538a7.002 7.002 0 01-4.17 8.567zM18.501 7.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
    </Svg>
  );
}

export default SvgRemixiconFill;
