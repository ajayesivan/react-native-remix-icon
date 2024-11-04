import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLoopLeftLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 4a7.992 7.992 0 00-6.616 3.5H8v2H2v-6h2V6a9.984 9.984 0 018-4c5.523 0 10 4.477 10 10h-2a8 8 0 00-8-8zm-8 8a8 8 0 0014.616 4.5H16v-2h6v6h-2V18a9.984 9.984 0 01-8 4C6.477 22 2 17.523 2 12h2z" />
    </Svg>
  );
}

export default SvgLoopLeftLine;
