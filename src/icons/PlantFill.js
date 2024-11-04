import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPlantFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20.998 3v2a7 7 0 01-7 7h-1v1h5v7a2 2 0 01-2 2h-8a2 2 0 01-2-2v-7h5v-3a7 7 0 017-7h3zm-15.5-1a7.49 7.49 0 016.124 3.169A7.962 7.962 0 009.998 10v1h-.5a7.5 7.5 0 01-7.5-7.5V2h3.5z" />
    </Svg>
  );
}

export default SvgPlantFill;
