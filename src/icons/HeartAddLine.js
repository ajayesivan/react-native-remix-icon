import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgHeartAddLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M19 14v3h3v2h-3v3h-2v-3h-3v-2h3v-3h2zm1.243-9.243a6 6 0 01.237 8.235l-1.42-1.418c1.33-1.524 1.26-3.914-.233-5.404a4.001 4.001 0 00-5.49-.153l-1.335 1.198-1.336-1.197a4 4 0 00-5.686 5.605l8.432 8.446L12 21.485 3.52 12.993a6 6 0 018.48-8.464 5.998 5.998 0 018.242.228z" />
    </Svg>
  );
}

export default SvgHeartAddLine;
