import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgStackedView = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M4 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm1 11V4h14v9zm-1 4a1 1 0 0 0-1 1v4h2v-3h14v3h2v-4a1 1 0 0 0-1-1z" />
  </Svg>
);
export default SvgStackedView;
