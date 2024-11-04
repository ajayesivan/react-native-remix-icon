import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgScreenshotLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="m11.993 14.407-1.552 1.552a4 4 0 1 1-1.418-1.41l1.555-1.556-4.185-4.185 1.415-1.415 4.185 4.185 4.189-4.189 1.414 1.414-4.19 4.19 1.562 1.56a4 4 0 1 1-1.414 1.414zM7 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4m10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4m2-7V5H5v8H3V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v9z" />
  </Svg>
);
export default SvgScreenshotLine;
