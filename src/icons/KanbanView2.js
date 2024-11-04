import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgKanbanView2 = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M2 4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm14 15h4V5h-4zM14 5h-4v14h4zM4 5v14h4V5z" />
  </Svg>
);
export default SvgKanbanView2;
