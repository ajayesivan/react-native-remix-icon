import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgFilePaperLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M17 17v2a1 1 0 1 0 2 0V4H5v11H3V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3v-2z" />
  </Svg>
);
export default SvgFilePaperLine;
