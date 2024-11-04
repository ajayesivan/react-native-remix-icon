import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgNotificationBadgeFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M13.341 4A6 6 0 0 0 21 11.659V21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zM19 10a4 4 0 1 1 0-8 4 4 0 0 1 0 8" />
  </Svg>
);
export default SvgNotificationBadgeFill;
