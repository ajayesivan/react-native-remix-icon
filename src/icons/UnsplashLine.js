import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgUnsplashLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M10.001 10v4h4v-4h7v11h-18V10h7zm-2 2h-3v7h14v-7h-3L16 16H8v-4zm8-9v6h-8V3h8zm-2 2h-4v2h4V5z" />
    </Svg>
  );
}

export default SvgUnsplashLine;
