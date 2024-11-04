import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDoorOpenFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M1.998 21v-2h2V4.835a1 1 0 01.821-.984l9.472-1.722a.6.6 0 01.707.59v1.28l4 .001a1 1 0 011 1v14h2v2h-4V6h-3v15h-13zm10-10h-2v2h2v-2z" />
    </Svg>
  );
}

export default SvgDoorOpenFill;
