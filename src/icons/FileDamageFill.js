import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFileDamageFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3 14l4 2.5 3-3.5 3 4 2-2.5 3 .5-3-3-2 2.5-3-5-3.5 3.75L3 10V2.992C3 2.455 3.447 2 3.998 2H14v6a1 1 0 001 1h6v11.992A1 1 0 0120.007 22H3.993A.993.993 0 013 21.008V14zm18-7h-5V2.003L21 7z" />
    </Svg>
  );
}

export default SvgFileDamageFill;
