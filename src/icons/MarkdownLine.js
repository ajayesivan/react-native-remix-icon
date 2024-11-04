import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMarkdownLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m1 2v14h16V5zm3 10.5H5v-7h2l2 2 2-2h2v7h-2v-4l-2 2-2-2zm11-3h2l-3 3-3-3h2v-4h2z" />
  </Svg>
);
export default SvgMarkdownLine;
