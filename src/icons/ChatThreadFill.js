import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgChatThreadFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="m2 22 5.291-1.176A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.703.425 3.306 1.176 4.709zM15.449 7l-.175 2H17v2h-1.901l-.175 2H17v2h-2.251l-.175 2h-2.008l.175-2h-2.008l-.175 2H8.552l.175-2H7v-2h1.9l.176-2H7V9h2.25l.176-2h2.007l-.175 2h2.008l.175-2zm-4.366 4-.175 2h2.008l.175-2z" />
  </Svg>
);
export default SvgChatThreadFill;
