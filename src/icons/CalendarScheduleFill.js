import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCalendarScheduleFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M7 1v2H3a1 1 0 00-1 1v16a1 1 0 001 1h7.755A8 8 0 0122 9.755V4a1 1 0 00-1-1h-4V1h-2v2H9V1H7zm16 15a6 6 0 11-12 0 6 6 0 0112 0zm-7-4v4.414l2.293 2.293 1.414-1.414L18 15.586V12h-2z" />
    </Svg>
  );
}

export default SvgCalendarScheduleFill;
