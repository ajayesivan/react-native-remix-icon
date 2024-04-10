import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFontMono(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M6 4h13v2H8v6h10v2H8v7H6V4z" />
    </Svg>
  );
}

export default SvgFontMono;
