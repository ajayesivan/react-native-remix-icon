import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCloudLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M12 2a7 7 0 0 1 6.992 7.339A6 6 0 0 1 17 21H7A6 6 0 0 1 5.008 9.339 7 7 0 0 1 12 2m0 2a5 5 0 0 0-4.994 5.243l.07 1.488-1.404.494A4.002 4.002 0 0 0 7 19h10a4 4 0 1 0-3.796-5.265l-1.898-.633A6 6 0 0 1 17 9a5 5 0 0 0-5-5" />
  </Svg>
);
export default SvgCloudLine;
