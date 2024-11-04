import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPlantLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M5.998 2a6.999 6.999 0 016.197 3.741A6.491 6.491 0 0117.498 3h3.5v2.5a6.5 6.5 0 01-6.5 6.5h-1.5v1h5v7a2 2 0 01-2 2h-8a2 2 0 01-2-2v-7h5v-2h-2a7 7 0 01-7-7V2h4zm10 13h-8v5h8v-5zm3-10h-1.5a4.5 4.5 0 00-4.5 4.5v.5h1.5a4.5 4.5 0 004.5-4.5V5zm-13-1h-2a5 5 0 005 5h2a5 5 0 00-5-5z" />
    </Svg>
  );
}

export default SvgPlantLine;
