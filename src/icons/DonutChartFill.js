import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDonutChartFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M11 2.05v3.02a7.002 7.002 0 105.192 12.536l2.137 2.137A9.958 9.958 0 0112 22C6.477 22 2 17.523 2 12c0-5.185 3.947-9.449 9-9.95zM21.95 13a9.954 9.954 0 01-2.207 5.328l-2.137-2.136A6.965 6.965 0 0018.93 13h3.022zM13.002 2.05c4.724.469 8.48 4.226 8.95 8.95h-3.022a7.005 7.005 0 00-5.928-5.929V2.049z" />
    </Svg>
  );
}

export default SvgDonutChartFill;
