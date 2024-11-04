import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDashboardHorizontalFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 3a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1h8zm8 0a1 1 0 011 1v6a1 1 0 01-1 1h-4a1 1 0 01-1-1V4a1 1 0 011-1h4zm0 10a1 1 0 011 1v6a1 1 0 01-1 1h-8a1 1 0 01-1-1v-6a1 1 0 011-1h8zM3 14a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6z" />
    </Svg>
  );
}

export default SvgDashboardHorizontalFill;
