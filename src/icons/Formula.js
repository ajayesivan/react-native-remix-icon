import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFormula(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M10 2a4 4 0 00-4 4v3H3v2h3v7a2 2 0 01-2 2H3v2h1a4 4 0 004-4v-7h3V9H8V6a2 2 0 012-2h1V2h-1zm5.202 14.997L11.891 21h2.595l2.014-2.434L18.514 21h2.595l-3.311-4.003L21.105 13h-2.596L16.5 15.428 14.491 13h-2.595l3.306 3.997z" />
    </Svg>
  );
}

export default SvgFormula;
