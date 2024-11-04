import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDashboardFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3 12a1 1 0 001 1h6a1 1 0 001-1V4a1 1 0 00-1-1H4a1 1 0 00-1 1v8zm0 8a1 1 0 001 1h6a1 1 0 001-1v-4a1 1 0 00-1-1H4a1 1 0 00-1 1v4zm10 0a1 1 0 001 1h6a1 1 0 001-1v-8a1 1 0 00-1-1h-6a1 1 0 00-1 1v8zm1-17a1 1 0 00-1 1v4a1 1 0 001 1h6a1 1 0 001-1V4a1 1 0 00-1-1h-6z" />
    </Svg>
  );
}

export default SvgDashboardFill;
