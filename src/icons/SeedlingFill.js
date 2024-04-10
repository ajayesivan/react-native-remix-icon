import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSeedlingFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M21.998 7v2.5a6.5 6.5 0 01-6.5 6.5h-2.5v5h-2v-7l.019-1a6.5 6.5 0 016.481-6h4.5zm-16-4a7.003 7.003 0 016.643 4.786A7.48 7.48 0 0010.014 13H8.998a7 7 0 01-7-7V3h4z" />
    </Svg>
  );
}

export default SvgSeedlingFill;
