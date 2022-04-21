import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgHeartAddLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M19 14v3h3v2h-3.001L19 22h-2l-.001-3H14v-2h3v-3h2zm1.243-9.243a6 6 0 01.236 8.235l-1.42-1.418c1.331-1.524 1.261-3.914-.232-5.404a4.001 4.001 0 00-5.49-.153l-1.335 1.198-1.336-1.197a3.999 3.999 0 00-5.494.154 4 4 0 00-.192 5.451l8.432 8.446L12 21.485l-8.48-8.492A6 6 0 0112 4.529a5.998 5.998 0 018.242.228z" />
    </Svg>
  );
}

export default SvgHeartAddLine;
