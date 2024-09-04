import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgDeviceLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M19 8h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zm-2 0V4H5v14h7V9a1 1 0 0 1 1-1zm-3 2v10h6V10z" />
  </Svg>
);
export default SvgDeviceLine;
