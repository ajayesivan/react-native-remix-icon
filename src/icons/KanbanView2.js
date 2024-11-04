import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgKanbanView2(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M2 4a1 1 0 011-1h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4zm14 15h4V5h-4v14zM14 5h-4v14h4V5zM4 5v14h4V5H4z" />
    </Svg>
  );
}

export default SvgKanbanView2;
