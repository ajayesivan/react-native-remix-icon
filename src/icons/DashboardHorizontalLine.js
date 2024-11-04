import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgDashboardHorizontalLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M3 10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1zm8 10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1zm2-5h6v4h-6zM3 20a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1zm2-1v-4h2v4zM5 9V5h6v4zm15 2a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm-1-2h-2V5h2z" />
  </Svg>
);
export default SvgDashboardHorizontalLine;
