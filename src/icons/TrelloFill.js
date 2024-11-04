import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgTrelloFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M5.251 3h13.5a2.25 2.25 0 0 1 2.25 2.25v13.5a2.25 2.25 0 0 1-2.25 2.25h-13.5a2.25 2.25 0 0 1-2.25-2.25V5.25A2.25 2.25 0 0 1 5.251 3m7.92 3.42v5.76c0 .596.484 1.08 1.08 1.08h3.33a1.08 1.08 0 0 0 1.08-1.08V6.42a1.08 1.08 0 0 0-1.08-1.08h-3.33a1.08 1.08 0 0 0-1.08 1.08m-7.83 0v10.26c0 .596.484 1.08 1.08 1.08h3.33a1.08 1.08 0 0 0 1.08-1.08V6.42a1.08 1.08 0 0 0-1.08-1.08h-3.33a1.08 1.08 0 0 0-1.08 1.08" />
  </Svg>
);
export default SvgTrelloFill;
