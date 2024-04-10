import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDashboardHorizontalLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3 10a1 1 0 001 1h8a1 1 0 001-1V4a1 1 0 00-1-1H4a1 1 0 00-1 1v6zm8 10a1 1 0 001 1h8a1 1 0 001-1v-6a1 1 0 00-1-1h-8a1 1 0 00-1 1v6zm2-5h6v4h-6v-4zM3 20a1 1 0 001 1h4a1 1 0 001-1v-6a1 1 0 00-1-1H4a1 1 0 00-1 1v6zm2-1v-4h2v4H5zM5 9V5h6v4H5zm15 2a1 1 0 001-1V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v6a1 1 0 001 1h4zm-1-2h-2V5h2v4z" />
    </Svg>
  );
}

export default SvgDashboardHorizontalLine;
