import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCalendar2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M9 1v2h6V1h2v2h4a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h4V1h2zm11 10H4v8h16v-8zM8 13v2H6v-2h2zm5 0v2h-2v-2h2zm5 0v2h-2v-2h2zM7 5H4v4h16V5h-3v2h-2V5H9v2H7V5z" />
    </Svg>
  );
}

export default SvgCalendar2Line;
