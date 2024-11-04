import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMapPinTimeFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M13 11V6h-2v7h6v-2h-4zm5.364 6.364L12 23.728l-6.364-6.364a9 9 0 1112.728 0z" />
    </Svg>
  );
}

export default SvgMapPinTimeFill;
