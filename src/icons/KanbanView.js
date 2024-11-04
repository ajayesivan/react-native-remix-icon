import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgKanbanView(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3 3a1 1 0 00-1 1v16a1 1 0 001 1h18a1 1 0 001-1V4a1 1 0 00-1-1H3zm1 16V5h16v14H4zM9 7H7v8h2V7zm6 0h2v6h-2V7zm-2 0h-2v10h2V7z" />
    </Svg>
  );
}

export default SvgKanbanView;
