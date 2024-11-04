import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgKanbanView = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M3 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm1 16V5h16v14zM9 7H7v8h2zm6 0h2v6h-2zm-2 0h-2v10h2z" />
  </Svg>
);
export default SvgKanbanView;
