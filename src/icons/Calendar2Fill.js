import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCalendar2Fill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2zM4 9v10h16V9zm2 2h2v2H6zm5 0h2v2h-2zm5 0h2v2h-2z" />
  </Svg>
);
export default SvgCalendar2Fill;
