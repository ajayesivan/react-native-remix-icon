import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgTimelineView = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M3 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm1 16V5h16v14zM14 7H6v2h8zm4 8v2h-8v-2zm-2-4H8v2h8z" />
  </Svg>
);
export default SvgTimelineView;
