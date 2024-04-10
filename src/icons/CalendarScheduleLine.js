import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCalendarScheduleLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M7 3V1h2v2h6V1h2v2h4a1 1 0 011 1v5h-2V5h-3v2h-2V5H9v2H7V5H4v14h6v2H3a1 1 0 01-1-1V4a1 1 0 011-1h4zm10 9a4 4 0 100 8 4 4 0 000-8zm-6 4a6 6 0 1112 0 6 6 0 01-12 0zm5-3v3.414l2.293 2.293 1.414-1.414L18 15.586V13h-2z" />
    </Svg>
  );
}

export default SvgCalendarScheduleLine;
