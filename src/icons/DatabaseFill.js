import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgDatabaseFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M11 7V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm-6 9v2h5v-2zm9 0v2h5v-2zm0-3v2h5v-2zm0-3v2h5v-2zm-9 3v2h5v-2z" />
  </Svg>
);
export default SvgDatabaseFill;
