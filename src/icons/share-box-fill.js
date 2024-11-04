import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgShareBoxFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M10 3v2H5v14h14v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm7.707 4.707L12 13.414 10.586 12l5.707-5.707L13 3h8v8z" />
  </Svg>
);
export default SvgShareBoxFill;
