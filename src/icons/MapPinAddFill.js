import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMapPinAddFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M18.364 17.364L12 23.728l-6.364-6.364a9 9 0 1112.728 0zM11 10H8v2h3v3h2v-3h3v-2h-3V7h-2v3z" />
    </Svg>
  );
}

export default SvgMapPinAddFill;
