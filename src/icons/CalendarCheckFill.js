import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCalendarCheckFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M9 1v2h6V1h2v2h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1zm11 7H4v11h16zm-4.964 2.136 1.414 1.414-4.95 4.95-3.536-3.536L9.38 11.55l2.121 2.122z" />
  </Svg>
);
export default SvgCalendarCheckFill;
