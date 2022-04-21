import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDonutChartFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M11 2.05v3.02a7 7 0 105.192 12.536l2.137 2.137A9.966 9.966 0 0112 22C6.477 22 2 17.523 2 12c0-5.185 3.947-9.449 9-9.95zM21.95 13a9.948 9.948 0 01-2.207 5.328l-2.137-2.136A6.958 6.958 0 0018.929 13h3.022zM13.002 2.05a10.004 10.004 0 018.95 8.95H18.93a7.005 7.005 0 00-5.928-5.929V2.049z" />
    </Svg>
  );
}

export default SvgDonutChartFill;
