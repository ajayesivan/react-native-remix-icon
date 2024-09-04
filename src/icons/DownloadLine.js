import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgDownloadLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M3 19h18v2H3zm10-5.828L19.071 7.1l1.414 1.414L12 17 3.515 8.515 4.929 7.1 11 13.173V2h2z" />
  </Svg>
);
export default SvgDownloadLine;
