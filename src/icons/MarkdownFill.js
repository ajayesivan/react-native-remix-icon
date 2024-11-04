import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMarkdownFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m4 12.5v-4l2 2 2-2v4h2v-7h-2l-2 2-2-2H5v7zm11-3v-4h-2v4h-2l3 3 3-3z" />
  </Svg>
);
export default SvgMarkdownFill;
