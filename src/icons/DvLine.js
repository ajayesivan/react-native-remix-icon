import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgDvLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M11.608 3H21a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-7v-2h6V5h-6.255A6.97 6.97 0 0 1 15 9a6.99 6.99 0 0 1-3 5.745V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6.255A7 7 0 0 1 11.608 3M6 13.584V20h4v-6.416A5.001 5.001 0 0 0 8 4a5 5 0 0 0-2 9.584M8 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2m9-3h2v2h-2zM7 17h2v2H7z" />
  </Svg>
);
export default SvgDvLine;
