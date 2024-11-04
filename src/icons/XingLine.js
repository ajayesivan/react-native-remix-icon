import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgXingLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M20.444 3.5 13.81 14.99 17.857 22h-2.31l-4.045-7.009H11.5L18.134 3.5zM8.31 7l2.422 4.196-.002.001L7.67 16.5H5.36l3.061-5.305L6.002 7z" />
  </Svg>
);
export default SvgXingLine;
