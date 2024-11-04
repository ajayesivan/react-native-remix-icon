import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgTrelloLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M5.001 5v14h14V5zm0-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-14a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m3 4h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1m6 0h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1" />
  </Svg>
);
export default SvgTrelloLine;
