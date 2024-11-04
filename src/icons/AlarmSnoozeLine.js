import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAlarmSnoozeLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3 13a9 9 0 1018 0 9 9 0 00-18 0zm16 0a7 7 0 11-14 0 7 7 0 0114 0zM5.283 2.747L1.747 6.283l1.414 1.414L6.697 4.16 5.283 2.747zm16.97 3.536l-3.535-3.536-1.415 1.414 3.536 3.536 1.414-1.414zM9 11h3.586L9 14.586V17h6v-2h-3.586L15 11.414V9H9v2z" />
    </Svg>
  );
}

export default SvgAlarmSnoozeLine;
