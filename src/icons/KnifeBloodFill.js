import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgKnifeBloodFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4.343 1.408L22.374 19.44a1.5 1.5 0 11-2.121 2.122l-4.596-4.596L12.12 20.5l-4.12-4.12V19a1 1 0 11-2 0v-4a1 1 0 00-1.993-.117L4.001 15v1a1 1 0 11-2 0V7.214A7.976 7.976 0 014.17 1.587l.173-.179z" />
    </Svg>
  );
}

export default SvgKnifeBloodFill;
