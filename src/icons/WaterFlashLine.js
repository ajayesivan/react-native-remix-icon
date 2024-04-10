import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgWaterFlashLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12.005 3.103l-4.95 4.95a7 7 0 109.9 0l-4.95-4.95zm0-2.828l6.364 6.364A9 9 0 115.64 19.367a9 9 0 010-12.728L12.005.275zm1 10.728h2.5l-4.5 6.5v-4.5h-2.5l4.5-6.5v4.5z" />
    </Svg>
  );
}

export default SvgWaterFlashLine;
