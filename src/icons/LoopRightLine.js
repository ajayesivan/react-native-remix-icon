import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLoopRightLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 4a7.992 7.992 0 016.616 3.5H16v2h6v-6h-2V6a9.984 9.984 0 00-8-4C6.477 2 2 6.477 2 12h2a8 8 0 018-8zm8 8a8 8 0 01-14.616 4.5H8v-2H2v6h2V18a9.984 9.984 0 008 4c5.523 0 10-4.477 10-10h-2z" />
    </Svg>
  );
}

export default SvgLoopRightLine;
