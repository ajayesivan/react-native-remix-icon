import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTShirtLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M14.515 5l2.606-2.607a1 1 0 011.415 0l4.242 4.243a1 1 0 010 1.414L19 11.828V21a1 1 0 01-1 1H6a1 1 0 01-1-1v-9.172L1.222 8.05a1 1 0 010-1.414l4.242-4.243a1 1 0 011.415 0L9.485 5h5.03zm.828 2H8.657L6.172 4.515 3.343 7.343 7 11v9h10v-9l3.657-3.657-2.829-2.828L15.343 7z" />
    </Svg>
  );
}

export default SvgTShirtLine;
