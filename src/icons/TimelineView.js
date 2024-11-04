import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTimelineView(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3 3a1 1 0 00-1 1v16a1 1 0 001 1h18a1 1 0 001-1V4a1 1 0 00-1-1H3zm1 16V5h16v14H4zM14 7H6v2h8V7zm4 8v2h-8v-2h8zm-2-4H8v2h8v-2z" />
    </Svg>
  );
}

export default SvgTimelineView;
