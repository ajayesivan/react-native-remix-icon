import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCalendarTodoLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M9 1v2h6V1h2v2h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1zm11 10H4v8h16zM8 14v2H6v-2zm10 0v2h-8v-2zM7 5H4v4h16V5h-3v2h-2V5H9v2H7z" />
  </Svg>
);
export default SvgCalendarTodoLine;
