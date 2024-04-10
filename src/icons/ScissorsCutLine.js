import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgScissorsCutLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M10 5.997c0 .732-.197 1.419-.54 2.01L12 10.581l6.728-6.727a2 2 0 012.828 0l-12.11 12.11a4 4 0 11-1.414-1.414l2.554-2.554-2.554-2.554A4 4 0 1110 5.997zm-2 0a2 2 0 10-4 0 2 2 0 004 0zm13.556 14.142a2 2 0 01-2.828 0l-5.317-5.317 1.415-1.414 6.73 6.73zM16 10.997h2v2h-2v-2zm4 0h2v2h-2v-2zm-14 0h2v2H6v-2zm-4 0h2v2H2v-2zm4 9a2 2 0 100-4 2 2 0 000 4z" />
    </Svg>
  );
}

export default SvgScissorsCutLine;
