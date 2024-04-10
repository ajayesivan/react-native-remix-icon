import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgKnifeBloodLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4.343 1.408L22.374 19.44a1.5 1.5 0 11-2.121 2.122l-4.596-4.596L12.12 20.5l-4.12-4.12V19a1 1 0 11-2 0v-4a1 1 0 00-1.993-.117L4.001 15v1a1 1 0 11-2 0V7.214A7.976 7.976 0 014.17 1.587l.173-.179zm.241 3.07l-.051.11a5.993 5.993 0 00-.522 2.103l-.01.31v.119a5.983 5.983 0 001.58 4.003l.176.185 6.364 6.364 2.828-2.829L4.584 4.478z" />
    </Svg>
  );
}

export default SvgKnifeBloodLine;
