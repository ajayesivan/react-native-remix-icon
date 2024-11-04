import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDashboardLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M14 21a1 1 0 01-1-1v-8a1 1 0 011-1h6a1 1 0 011 1v8a1 1 0 01-1 1h-6zM4 13a1 1 0 01-1-1V4a1 1 0 011-1h6a1 1 0 011 1v8a1 1 0 01-1 1H4zm5-2V5H5v6h4zM4 21a1 1 0 01-1-1v-4a1 1 0 011-1h6a1 1 0 011 1v4a1 1 0 01-1 1H4zm1-2h4v-2H5v2zm10 0h4v-6h-4v6zM13 4a1 1 0 011-1h6a1 1 0 011 1v4a1 1 0 01-1 1h-6a1 1 0 01-1-1V4zm2 1v2h4V5h-4z" />
    </Svg>
  );
}

export default SvgDashboardLine;
