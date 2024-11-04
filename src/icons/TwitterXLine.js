import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTwitterXLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.014L2.32 21h2.65l5.518-6.349zM16.25 19L5.75 5h2l10.5 14h-2z" />
    </Svg>
  );
}

export default SvgTwitterXLine;
