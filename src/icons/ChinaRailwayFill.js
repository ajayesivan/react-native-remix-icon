import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgChinaRailwayFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M11 19v-6l-2-1V9h6v3l-2 1v6l5 1v2H6v-2l5-1zM10 2.223V1h4v1.223a9.003 9.003 0 012.993 16.266l-1.11-1.664a7 7 0 10-7.767 0l-1.109 1.664A9.003 9.003 0 0110 2.223z" />
    </Svg>
  );
}

export default SvgChinaRailwayFill;
