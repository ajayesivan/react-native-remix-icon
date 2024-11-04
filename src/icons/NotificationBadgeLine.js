import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgNotificationBadgeLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M13.341 4A6 6 0 0 0 13 6H5v14h14v-8a6 6 0 0 0 2-.341V21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zM19 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8" />
  </Svg>
);
export default SvgNotificationBadgeLine;
