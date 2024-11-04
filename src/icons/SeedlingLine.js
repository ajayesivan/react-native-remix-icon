import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSeedlingLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M5.998 3a7.002 7.002 0 016.913 5.895A6.479 6.479 0 0117.498 7h4.5v2.5a6.5 6.5 0 01-6.5 6.5h-2.5v5h-2v-8h-2a7 7 0 01-7-7V3h4zm14 6h-2.5a4.5 4.5 0 00-4.5 4.5v.5h2.5a4.5 4.5 0 004.5-4.5V9zm-14-4h-2v1a5 5 0 005 5h2v-1a5 5 0 00-5-5z" />
    </Svg>
  );
}

export default SvgSeedlingLine;
