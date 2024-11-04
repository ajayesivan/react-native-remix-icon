import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgWaterFlashFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M5.64 6.639L12.006.275l6.364 6.364A9 9 0 115.64 19.367a9 9 0 010-12.728zm7.365 4.364v-4.5l-4.5 6.5h2.5v4.5l4.5-6.5h-2.5z" />
    </Svg>
  );
}

export default SvgWaterFlashFill;
