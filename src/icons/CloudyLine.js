import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCloudyLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M9.5 6a6.5 6.5 0 0 0 0 13h7a4.5 4.5 0 1 0-.957-8.898A6.5 6.5 0 0 0 9.5 6m7 15h-7a8.5 8.5 0 1 1 7.215-12.997A6.5 6.5 0 0 1 16.5 21" />
  </Svg>
);
export default SvgCloudyLine;
