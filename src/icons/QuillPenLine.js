import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgQuillPenLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M6.94 14.033a29.79 29.79 0 00-.606 1.783c.96-.697 2.101-1.14 3.418-1.304 2.513-.314 4.746-1.973 5.876-4.058l-1.456-1.455 1.413-1.415 1-1.002c.43-.429.915-1.224 1.428-2.367-5.593.867-9.018 4.291-11.074 9.818zM17 8.997l1 1c-1 3-4 6-8 6.5-2.669.333-4.336 2.167-5.002 5.5H3c1-6 3-20 18-20-1 2.997-1.998 4.996-2.997 5.997L17 8.997z" />
    </Svg>
  );
}

export default SvgQuillPenLine;
