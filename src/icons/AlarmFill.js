import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAlarmFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 22a9 9 0 110-18 9 9 0 010 18zm1-9V8h-2v7h5v-2h-3zM1.747 6.283l3.536-3.536 1.414 1.414L3.16 7.697 1.747 6.283zm16.97-3.536l3.536 3.536-1.414 1.414-3.536-3.536 1.415-1.414z" />
    </Svg>
  );
}

export default SvgAlarmFill;
