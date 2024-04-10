import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTShirtLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M14.514 5l2.606-2.607a1 1 0 011.414 0l4.243 4.243a1 1 0 010 1.414l-3.778 3.778V21a1 1 0 01-1 1h-12a1 1 0 01-1-1V11.83L1.22 8.05a1 1 0 010-1.414l4.242-4.243a1 1 0 011.414 0L9.484 5h5.03zm.828 2H8.656L6.17 4.515 3.342 7.343 6.999 11v9h10v-9l3.657-3.657-2.829-2.828L15.342 7z" />
    </Svg>
  );
}

export default SvgTShirtLine;
