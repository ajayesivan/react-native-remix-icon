import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDoorOpenLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M1.998 21v-2h2V4.835a1 1 0 01.821-.984l9.472-1.722a.6.6 0 01.707.59v1.28l4 .001a1 1 0 011 1v14h2v2h-4V6h-3v15h-13zm11-16.604l-7 1.273V19h7V4.396zm-1 6.604v2h-2v-2h2z" />
    </Svg>
  );
}

export default SvgDoorOpenLine;
