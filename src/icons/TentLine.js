import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgTentLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M22.103 19 12.866 3a1 1 0 0 0-1.732 0L1.896 19H1v2h22v-2zM7.6 19H4.206L12 5.5 19.794 19H16.4L12 11zm4.4-3.85L14.117 19H9.884z" />
  </Svg>
);
export default SvgTentLine;
