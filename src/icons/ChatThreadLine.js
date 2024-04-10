import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgChatThreadLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M2 22l5.291-1.176A9.956 9.956 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.703.425 3.306 1.176 4.709L2 22zm6.234-2.94l-.653-.349-2.947.655.655-2.947-.35-.653A7.955 7.955 0 014 12a8 8 0 118 8 7.955 7.955 0 01-3.766-.94zM15.45 7H13.44l-.175 2h-2.008l.175-2H9.426L9.25 9H7v2h2.076L8.9 13H7v2h1.726l-.175 2h2.008l.175-2h2.007l-.175 2h2.008l.175-2H17v-2h-2.076l.175-2H17V9h-1.726l.175-2zm-4.366 4h2.008l-.175 2h-2.008l.175-2z" />
    </Svg>
  );
}

export default SvgChatThreadLine;
